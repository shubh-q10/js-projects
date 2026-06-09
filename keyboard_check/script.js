const insert = document.getElementById("insert")
let keypressed = window.addEventListener('keydown', function(event) {
    insert.innerHTML = `
    <div class='color'>
    <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${event.key === '' ? "space": event.key}</td>
    <td>${event.keyCode}</td>
    <td>${event.code}</td>
  </tr>
  
</table>

    </div>
    `

})
