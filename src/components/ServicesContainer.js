import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faBicycle,
  faClipboardList,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./ServicesContainer.css";

function ServicesContainer() {
  return (
    <div className="services-container">
      <div class="row row-cols-1 row-cols-md-3 g-4" style={{ margin: "25px" }}>
        <div class="col">
          <div
            class="card h-100"
            style={{ backgroundColor: "rgba(0,0,0,0.9)", borderRadius: "50px" }}
          >
            <FontAwesomeIcon
              icon={faDumbbell}
              style={{ color: "red", height: "10vh" }}
            />
            <div class="card-body">
              <h5
                class="card-title"
                style={{ color: "white", fontSize: "1.8rem" }}
              >
                WORKING WITH WEIGHTS
              </h5>
              <p class="card-text">
                It is used for the training of fighters, bodybuilders, athletes
                and offers you the opportunity to improve your fitness and tone.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div
            class="card h-100"
            style={{ backgroundColor: "rgba(0,0,0,0.9)", borderRadius: "50px" }}
          >
            <FontAwesomeIcon
              icon={faBicycle}
              style={{ color: "red", height: "10vh" }}
            />
            <div class="card-body">
              <h5
                class="card-title"
                style={{ color: "white", fontSize: "1.8rem" }}
              >
                LATEST GENERATION FITNESS DEVICES
              </h5>
              <p class="card-text">
                The diversity of equipment available in the hall will ensure a
                remodeling as you wish.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div
            class="card h-100 "
            style={{ backgroundColor: "rgba(0,0,0,0.9)", borderRadius: "50px" }}
          >
            <FontAwesomeIcon
              icon={faClipboardList}
              style={{ color: "red", height: "10vh" }}
            />
            <div class="card-body">
              <h5
                class="card-title"
                style={{ color: "white", fontSize: "1.8rem" }}
              >
                MONITORING DURING TRAINING
              </h5>
              <p class="card-text">
                During the training you benefit from the careful monitoring of
                our top coaches.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h2 class="card-title" style={{ fontWeight: "850" }}>
                FITNESS
              </h2>
              <p class="card-text" style={{ color: "black" }}>
                Fitness is the art of using various progressive resistance
                exercises to control and develop muscle mass. The use of fitness
                equipment brings much desired and work-out with our coaches
                guarantees the much desired physical appearance.
              </p>
            </div>
          </div>
          <div class="card">
            <ul class="list-group list-group-flush">
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ color: "red", height: "5vh" }}
              />
              <li class="list-group-item">STRENGHT DEVICES</li>
              <li class="list-group-item">BODYBUILDING</li>
              <li class="list-group-item">CULTURISM</li>
              <li class="list-group-item">BOX BAG</li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h2 class="card-title" style={{ fontWeight: "850" }}>
                CIRCUIT TRAINING
              </h2>
              <p class="card-text" style={{ color: "black" }}>
                An "circuit" as an exercise is a complement to all the exercises
                prescribed in the program. When the circuit ends, start the
                first exercise again for the next circuit. Traditionally, the
                time between circuit training exercises is short.
              </p>
            </div>
          </div>
          <div class="card">
            <ul class="list-group list-group-flush">
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ color: "red", height: "5vh" }}
              />
              <li class="list-group-item">STEPPER</li>
              <li class="list-group-item">BOSU BALLS</li>
              <li class="list-group-item">TRX</li>
              <li class="list-group-item">KETTLEBELL</li>
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h2 class="card-title" style={{ fontWeight: "850" }}>
                CARDIO
              </h2>
              <p class="card-text" style={{ color: "black" }}>
                The best cardio exercises are compound exercises, which involve
                multiple joints and more than one muscle group. In order to
                perform exercises of this type, we propose running on the
                treadmill, using a stepper or riding a bicycle.
              </p>
            </div>
          </div>
          <div class="card">
            <ul class="list-group list-group-flush">
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ color: "red", height: "5vh" }}
              />
              <li class="list-group-item">BYCYCLE</li>
              <li class="list-group-item">RUNNING BAND</li>
              <li class="list-group-item">ELIPTICA</li>
              <li class="list-group-item">SPINNER BIKE</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesContainer;
