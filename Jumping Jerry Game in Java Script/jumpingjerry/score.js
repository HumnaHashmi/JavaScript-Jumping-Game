function Paramsgetsss(){
    const a = window.location.search
    const b = a.split("=")
    alert(b)
    document.getElementById("gameoverscore").innerHTML = b[1] ? <p>{b[1]}</p> : <p>0</p>
}
// window.onload = Paramsgetsss()
window.onload = alert("hello")