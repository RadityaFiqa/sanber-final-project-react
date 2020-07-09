import React from "react";
import { Typography } from "@material-ui/core";
import { Facebook, WhatsApp, Instagram } from "@material-ui/icons/";
export default function About() {
  return (
    <div style={{ marginTop: 20, margin: 20 }}>
      <Typography
        variant="h4"
        component="h4"
        style={{ textAlign: "center", fontFamily: "raleway" }}
        gutterBottom
      >
        Raditya Firman Syaputra
      </Typography>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          alt="foto"
          src="https://d17ivq9b7rppb3.cloudfront.net/small/avatar/20200506105706b1f6ba2e8a1b344f7a9dc42b3c5965b5.png"
          width={150}
          height={150}
          style={{ margin: 20, borderRadius: 75 }}
        />
      </div>
      <Typography variant="h5">Tentang Saya</Typography>

      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        style={{ marginBottom: 50, fontFamily: "raleway" }}
      >
        Saya adalah siswa SMA kelas 11 dari Sragen dengan jurusan MIPA. Saat ini
        saya sedang mendalami dunia pemrograman khususnya Web Development dan
        Mobile Development.
      </Typography>
      <Typography variant="h5" style={{ textAlign: "center" }}>
        Contact Me
      </Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: 20,
        }}
      >
        <a href="http://facebook.com">
          <Facebook style={{ width: 50, height: 50, color: "grey" }} />
        </a>

        <a href="https://api.whatsapp.com/send?phone=6281232254875">
          <WhatsApp style={{ width: 50, height: 50, color: "grey" }} />
        </a>
        <a href="hhttps://instagram.com/sekutumu">
          <Instagram style={{ width: 50, height: 50, color: "grey" }} />
        </a>
      </div>
    </div>
  );
}
