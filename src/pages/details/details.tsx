import { FaMapMarkerAlt } from "react-icons/fa";
import "./details.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InfoCard } from "../../components/info-card/info-card";
import { Header } from "../../components/header/header";

export function Details() {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [age, setAge] = useState();
  const [location, setLocation] = useState();
  const [isHuman, setIsHuman] = useState();
  const [ownerName, setOwnerName] = useState();
  const [ownerImage, setOwnerImage] = useState();
  const [genre, setGenre] = useState("");
  const [color, setColor] = useState();
  const [race, setRace] = useState();
  const [weight, setWeight] = useState();
  const [bio, setBio] = useState();

  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/profiles/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setName(data.name);
        setAge(data.age);
        setLocation(data.location);
        setIsHuman(data.isHuman);
        setImage(data.photo_url);
        setBio(data.bio);
        if (!data.isHuman) {
          setColor(data.animal_data.color);
          sanitizeGenre(data.animal_data.genre);
          setRace(data.animal_data.race);
          setWeight(data.animal_data.weight);
          getOwnerInformations(data.animal_data.owner_id);
        } else {
          document.getElementById("bio")!.classList.add("human-bio");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function getOwnerInformations(id: number) {
    fetch(`http://localhost:5000/profiles/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setOwnerImage(data.photo_url);
        setOwnerName(data.name);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function sanitizeGenre(value: string) {
    switch (value.toLowerCase()) {
      case "f":
        setGenre("Fêmea");
        break;
      case "m":
        setGenre("Macho");
        break;
      default:
        setGenre("Indefinido");
    }
  }

  return (
    <div className="detail-container">
      <Header id={id} location="/home" showLike={!isHuman} />
      <div className="image">
        <img src={image} alt="gato ioda" />
      </div>
      <div className="slider-container">
        <div className="name-age">
          <span className="name">{name}</span>
          <span className="age">{age} anos</span>
        </div>
        <div className="location">
          <FaMapMarkerAlt className="location-icon" />
          <span className="location">{location}</span>
        </div>
        {!isHuman && (
          <>
            <div className="details">
              <InfoCard title="Sexo" value={genre} />
              <InfoCard title="Cor" value={color} />
              <InfoCard title="Raça" value={race} />
              <InfoCard title="Peso" value={`${weight}Kg`} />
            </div>
            <div className="profile">
              <img src={ownerImage} alt="#" />
              <div className="data-profile">
                <span className="title">Dono(a):</span>
                <span className="value">{ownerName}</span>
              </div>
            </div>
          </>
        )}

        <div className="bio" id="bio">
          {bio}
        </div>
        {!isHuman && (
          <button className="profile-button">Tenho interesse</button>
        )}
      </div>
    </div>
  );
}
