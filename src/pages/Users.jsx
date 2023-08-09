import React, { useState } from "react";
import { Link } from "react-router-dom"


export const Users = () => {

    const users = [["kaanzsoy", "Kaan Özsoy", "hkaanozsoy@gmail.com", "admin", "26.05.2001"],
                  ["user_2", "Isim Soyisim", "mail@hotmail.com", "user", "01.01.1970"]];

    const [twoDimensionalArray, setTwoDimensionalArray] = useState(users);
    const [arrayLength, setArrayLength] = useState(users.length);

    const handleShowLength = () => {
        setArrayLength(users.length);
    };

    const handleRemoveRow = (rowIndex) => {
        const newArray = twoDimensionalArray.filter((_, index) => index !== rowIndex);
        setTwoDimensionalArray(newArray);
        setArrayLength(newArray.length);
    };

    return (
        <div className="user-list-panel">
        <table>
        <tbody>
        <h2 className="kullanici-header">Kullanıcılar:</h2>
        <p>Kullanıcı sayısı: {arrayLength}</p>
          {twoDimensionalArray.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}&nbsp;&nbsp;&nbsp;&nbsp;</td>
              ))}
              <td>
                <button className="delete" onClick={() => handleRemoveRow(rowIndex)}>Kullanıcıyı sil</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>     
    )
}

export default Users;