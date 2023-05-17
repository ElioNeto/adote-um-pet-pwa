import { FaMapMarkerAlt } from "react-icons/fa";
import "./details.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InfoCard } from "../../components/info-card/info-card";
import { Header } from "../../components/header/header";
import { authValidate, redirect } from "../../utils/utils";

import { readSubsData, writeData } from "../../utils/firebase";
import {
  DEFAULT_AVATAR,
  PETS_COLLECTION,
  USER_COLLECTION,
} from "../../utils/constants";

export function Details() {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [age, setAge] = useState();
  const [location, setLocation] = useState();
  const [ownerName, setOwnerName] = useState();
  const [ownerImage, setOwnerImage] = useState("");
  const [genre, setGenre] = useState("");
  const [color, setColor] = useState();
  const [race, setRace] = useState();
  const [weight, setWeight] = useState();
  const [bio, setBio] = useState();
  const [owner, setOwner] = useState();

  let { id } = useParams();

  useEffect(() => {
    getGeneralData();
  }, []);

  function getOwnerInformations(id: string) {
    readSubsData(`${USER_COLLECTION}/${id.toLowerCase()}`, (cb: any) => {
      console.log(cb, id);

      cb.photo ? setOwnerImage(cb.photo) : setOwnerImage(DEFAULT_AVATAR);

      setOwnerName(cb.name);
    });
  }

  function getGeneralData() {
    readSubsData(`${PETS_COLLECTION}/${id}`, (cb: any) => {
      console.log(cb);

      setName(cb.petName);
      setAge(cb.petAge);
      setLocation(cb.petLocation);
      setImage(cb.petPic);
      setBio(cb.petInfo);
      setColor(cb.petColor);
      sanitizeGenre(cb.petSexOptions);
      setRace(cb.petRace);
      setWeight(cb.petWeight);
      getOwnerInformations(cb.petOwner);
      setOwner(cb.petOwner);
    });
  }

  function sanitizeGenre(value: string) {
    switch (value.toLowerCase()) {
      case "female":
        setGenre("Fêmea");
        break;
      case "male":
        setGenre("Macho");
        break;
      default:
        setGenre("Indefinido");
    }
  }

  return (
    <div className="detail-container">
      <Header location="/home" showLike={true} user={owner} pet={id} />
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

        <div className="bio" id="bio">
          {bio}
        </div>
        <button
          className="profile-button"
          onClick={() => {
            //redirect("/chats");
          }}
        >
          Tenho interesse
        </button>
      </div>
    </div>
  );
}
