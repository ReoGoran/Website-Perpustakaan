function initMap() {
    const kepriCenter = { lat: 1.0, lng: 104.0 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: kepriCenter,
    });

    const libraries = [
        {
            name: "Dinas Perpustakaan dan Kearsipan Provinsi Kepulauan Riau",
            position: { lat: 0.917, lng: 104.450 },
            info: "Jl. Basuki Rahmat No. 1, Tanjungpinang"
        },
        {
            name: "UPT Perpustakaan Muhammad Sani",
            position: { lat: 1.120, lng: 104.000 },
            info: "Batam Center, Kota Batam"
        },
        {
            name: "Perpustakaan STAIN Sultan Abdurrahman",
            position: { lat: 1.150, lng: 104.500 },
            info: "Bintan"
        },
        {
            name: "Perpustakaan Bank Indonesia Kepulauan Riau",
            position: { lat: 1.130, lng: 104.030 },
            info: "Kota Batam"
        },
        {
            name: "Perpustakaan Balai Pelestarian Nilai Budaya Kepri",
            position: { lat: 0.920, lng: 104.460 },
            info: "Tanjungpinang"
        },
        {
            name: "Library @ Trikora",
            position: { lat: 1.050, lng: 104.650 },
            info: "Trikora, Bintan"
        }
    ];

    libraries.forEach(library => {
        const marker = new google.maps.Marker({
            position: library.position,
            map: map,
            title: library.name
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `<strong>${library.name}</strong><br>${library.info}`
        });

        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });
    });
}

