import { useState } from "react"
import { tableA } from "./db"

export default function Qt() {
    const [visible, setVisible] = useState(false)

    return (
        <div className="help" style={{visibility: visible ? 'visible' : 'hidden'}}>
            <button className="help-table submit" onClick={() => setVisible(!visible)}>?<span class="tooltiptext">Need help with Qt?</span></button>
            <table>
                <thead>
                <tr>
                    <th>№</th>
                    <th>Qt</th>
                    <th>Letter</th>
                    <th>Consonant</th>
                    <th>Example</th>
                </tr>
                </thead>
                <tbody>
                    {tableA.map((el, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{el.qt}</td>
                                <td>{el.letter}</td>
                                <td>{el.consonant}</td>
                                <td>{el.example}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}