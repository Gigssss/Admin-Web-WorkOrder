import React from "react";
import { BsFillLaptopFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import LogoWO from "../../assets/images/data-gathering.png";
import Departement from "../../assets/images/network.png";
import Group from "../../assets/images/united.png";
import AddUser from "../../assets/images/add-user.png";
import "./cardDashboard.css";

function CardDashboard() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3 col-6">
          <div class="small-box bg-success rounded-3">
            <div class="mt-3 d-flex justify-content-between mx-4 pt-3">
              <div>
                <h3 className="text-white">150</h3>

                <p className="text-white">Work Order</p>
              </div>
              <img src={LogoWO} className="icon-wo" />
            </div>
            <div className="justify-content-center d-flex">
              <div className=" text-center mb-2">
                <a href="#" class="text-white text-decoration-none">
                  More info <i class="fas fa-arrow-circle-right"></i>
                </a>
                <BsFillArrowRightCircleFill />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-6">
          <div class="small-box bg-info rounded-3">
            <div class="mt-3 d-flex justify-content-between mx-4 pt-3">
              <div>
                <h3 className="text-white">150</h3>

                <p className="text-white">Departement</p>
              </div>
              <img src={Departement} className="icon-wo" />
            </div>
            <div className="justify-content-center d-flex">
              <div className=" text-center mb-2">
                <a href="#" class="text-white text-decoration-none">
                  More info <i class="fas fa-arrow-circle-right"></i>
                </a>
                <BsFillArrowRightCircleFill />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-6">
          <div class="small-box bg-danger rounded-3">
            <div class="mt-3 d-flex justify-content-between mx-4 pt-3">
              <div>
                <h3 className="text-white">150</h3>

                <p className="text-white">Group</p>
              </div>
              <img src={Group} className="icon-wo" />
            </div>
            <div className="justify-content-center d-flex">
              <div className=" text-center mb-2">
                <a href="#" class="text-white text-decoration-none">
                  More info <i class="fas fa-arrow-circle-right"></i>
                </a>
                <BsFillArrowRightCircleFill />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-6">
          <div class="small-box bg-secondary rounded-3">
            <div class="mt-3 d-flex justify-content-between mx-4 pt-3">
              <div>
                <h3 className="text-white">150</h3>

                <p className="text-white">Register User</p>
              </div>
              <img src={AddUser} className="icon-wo" />
            </div>
            <div className="justify-content-center d-flex">
              <div className=" text-center mb-2">
                <a href="#" class="text-white text-decoration-none">
                  More info <i class="fas fa-arrow-circle-right"></i>
                </a>
                <BsFillArrowRightCircleFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDashboard;
