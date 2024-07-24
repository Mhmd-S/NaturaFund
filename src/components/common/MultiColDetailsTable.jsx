import React from "react";

const MultiColDetailsTable = ({ title, data }) => {
    // Extract headers
    const headers = Object.keys(data);

    // Extract rows
    const rows = Object.keys(data[headers[0]]).map((key) => {
        let row = { scenario: key };
        headers.forEach((header) => {
            row[header] = data[header][key];
        });
        return row;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Scenario</th>
                    {headers.map((header) => (
                        <th key={header}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        <td>{row.scenario}</td>
                        {headers.map((header) => (
                            <td key={header}>{row[header]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MultiColDetailsTable;
