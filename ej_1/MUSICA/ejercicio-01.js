const playlist = [
    {titulo: "soy así", artista: "Zakyo", duracion: 221},
    {titulo: "SINPANTY", artista: "Jovaan", duracion: 243},
    {titulo: "CiEgO", artista: "LOS PECHOPALOMOS", duracion: 233},
    {titulo: "NOSTALGIA", artista: "SAIKO", duracion: 455},
    {titulo: "Vuela Corazón", artista: "xiyo y fernandezz", duracion: 301},
    {titulo: "OR NAH", artista: "anuel", duracion: 341},
    {titulo: "Strip Club", artista: "Jotaerre", duracion: 300},
    {titulo: "enamorao de una sicaria", artista: "Raul Clyde", duracion: 238},
    {titulo: "RACK$$", artista: "alejo", duracion: 200},
    {titulo: "GOUT", artista: "la pantera", duracion: 155},
];
playlist.forEach((cancion) => {
    console.log(`titulo: ${cancion.titulo} - Artista: ${cancion.artista}`);
}
);