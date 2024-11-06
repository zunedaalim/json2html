export default function json2html(data) {
  const columns = [...new Set(data.flatMap(Object.keys))];
  let html = '<table data-user="zunedaalim1@gmail.com">';
  html += "<thead><tr>";
  columns.forEach((col) => {
    html += `<th>${col}</th>`;
  });
  html += "</tr></thead>";
  html += "<tbody>";
  data.forEach((row) => {
    html += "<tr>";
    columns.forEach((col) => {
      html += `<td>${row[col] !== undefined ? row[col] : ""}</td>`;
    });
    html += "</tr>";
  });
  html += "</tbody>";
  html += "</table>";

  return html;
}
