function Calcular()
{
    var PuntosSquad = document.getElementById("PuntosSquad").value;
    var MaxPuntos = document.getElementById("PuntosMax").value;
    var porcentajeSquad = (100 * PuntosSquad) / MaxPuntos;
    
    if (porcentajeSquad >= 80) 
    {
        document.getElementById("salida").innerHTML = "Muy bien squad!";
    }
    else
    {
        document.getElementById("salida").innerHTML = "Pueden hacerlo mejor";
    }
}





