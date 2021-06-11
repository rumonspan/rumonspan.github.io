function anggotaGrup(x,y){
    var statusAnggota = [
        {nama: "Elveria Siahaan",
        posisi: "vokalis",
        status: "aktif",
        deskripsi: "Sejak muda, Elveria telah memiliki banyak pengalaman sebagai penyanyi dan pelatih. Elveria sering menyanyi dalam mengisi acara mulai dari lingkungan RT/RW, komunitas, perkumpulan keluarga, gereja, hingga mengikuti festival dan acara skala nasional bersama paduan suara. Elveria juga telah melatih paduan suara dan <i>vocal group</i> dari skala RT sampai gereja. Pendiri Rum Onspan Music."},
        {nama: "Benny Padang",
        posisi: "gitaris",
        status: "aktif",
        deskripsi: "Telah bermain gitar selama belasan tahun. Benny mulai belajar gitar sejak usia 9 tahun setelah melihat Elveria, ibunya, sering memainkan gitar. Setelah sedikit bisa bermain, Benny mulai mengikuti kursus gitar di Yamaha Music, dan sejak saat itu kemampuannya terus berkembang. Namun sejak SMA, karena sibuk berkegiatan lain, Benny agak lebih jarang memainkan gitar, walaupun masih sering mengisi pujian di gereja atau ibadah lainnya. Saat pandemi COVID-19, Benny kembali menekuni gitar dan skillnya pun kembali seperti saat kursus, bahkan lebih baik. Pendiri Rum Onspan Music."}
    ];
    if (y==0){return statusAnggota.length;}
    else if (y==1){return statusAnggota[x].nama}
    else if (y==2){return statusAnggota[x].posisi}
    else if (y==3){return statusAnggota[x].status}
    else if (y==4){return statusAnggota[x].deskripsi}
}