import React from 'react'
import '../Styles/Dashboard.css'
import down_icon from '../Data/icons/down-chevron.png'
import heart_icon from '../Data/icons/heart.png'
import bone_img from '../Data/icons/bone.png'
import leg_icon from '../Data/icons/leg.png';
import teeth_icon from '../Data/icons/tooth.png';
import lungs_icon from '../Data/icons/human_lungs.png'
import right_arrow from '../Data/icons/right-arrow.png'
import human_body from '../Data/icons/human_body2.png'
import zoom_icon from '../Data/icons/zoom-in.png'
import scann_icon from '../Data/icons/qr-scan.png'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="top">
        <h2>Dashboard</h2>
        <div className="top_1">
          <p>This week </p>
          <img src={down_icon} alt="" />
        </div>
      </div>
      <div className="body-health">
        <div className="body-part">
          <img className='zoom-icon' src={zoom_icon} alt="" />
          <img className='human-body' src={human_body} alt="" />
          <div className="leg">
            <div className="healthy-leg">
              <img src={leg_icon} alt="" />
              <p>Healthy Leg</p>
            </div>
            <img className='scan' src={scann_icon} alt="" />
          </div>
          <div className="heart">
            <img className='scan' src={scann_icon} alt="" />
            <div className="healthy-heart">
              <img src={heart_icon} alt="" />
              <p>Healthy Heart</p>
            </div>
          </div>
        </div>
        <div className="body-part2">
          <div className="lungs">
            <div className="lungs_1">
              <img src={lungs_icon} alt="" />
              <p>Lungs</p>
            </div>
            <span>Date: 26 Oct 2021</span>
            <div className="bar">
              <div style={{ backgroundColor: 'lightred' }} className="indicator"></div>
            </div>
          </div>

          <div className="lungs">
            <div className="lungs_1">
              <img src={teeth_icon} alt="" />
              <p>Teeth</p>
            </div>
            <span>Date: 26 Oct 2021</span>
            <div className="bar">
              <div style={{ backgroundColor: 'green' }} className="indicator"></div>
            </div>
          </div>

          <div className="lungs">
            <div className="lungs_1">
              <img src={bone_img} alt="" />
              <p>Bones</p>
            </div>
            <span>Date: 26 Oct 2021</span>
            <div className="bar">
              <div style={{ backgroundColor: 'lightorange' }} className="indicator"></div>
            </div>
          </div>

          <div className="details">
            <div className="details_1">
              <span>Details</span>
              <img src={right_arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="Activity">
        <div className="activity_top">
          <h1>Activity</h1>
          <span>3 appointment on this week</span>
        </div>
        <div className="activity_bars">
          <div className="ap_1">
            <div className="ap_11"></div>
            <div className="ap_12 aqua"></div>
            <div className="ap_13">
              <div className="ap_131"></div>
              <div className="ap_132"></div>
            </div>
            <div className="ap_14"></div>
          </div>
            <div className="ap_2">
              <div className="ap_21">
                <div className="ap_211 aqua"></div>
                <div className="ap_212 violet"></div>
              </div>
              <div className="ap_22 violet"></div>
              <div className="ap_23">
                <div className="ap_231"></div>
                <div className="ap_232"></div>
              </div>
              <div className="ap_24 aqua"></div>
          </div>
          <div className="ap_1">
            <div className="ap_11"></div>
            <div className="ap_12"></div>
            <div className="ap_13">
              <div className="ap_131 aqua"></div>
              <div className="ap_132 violet"></div>
            </div>
            <div className="ap_14 violet"></div>
          </div>
            <div className="ap_2">
              <div className="ap_21">
                <div className="ap_211"></div>
                <div className="ap_212"></div>
              </div>
              <div className="ap_22"></div>
              <div className="ap_23 aqua">
                <div className="ap_231 aqua"></div>
                <div className="ap_232 violet"></div>
              </div>
              <div className="ap_24"></div>
          </div>
          <div className="ap_1">
            <div className="ap_11"></div>
            <div className="ap_12 violet"></div>
            <div className="ap_13">
              <div className="ap_131"></div>
              <div className="ap_132"></div>
            </div>
            <div className="ap_14"></div>
          </div>
            <div className="ap_2">
              <div className="ap_21">
                <div className="ap_211 aqua"></div>
                <div className="ap_212 violet"></div>
              </div>
              <div className="ap_22 aqua"></div>
              <div className="ap_23">
                <div className="ap_231"></div>
                <div className="ap_232"></div>
              </div>
              <div className="ap_24 violet"></div>
          </div>
          <div className="ap_1">
            <div className="ap_11"></div>
            <div className="ap_12"></div>
            <div className="ap_13">
              <div className="ap_131 aqua"></div>
              <div className="ap_132 violet"></div>
            </div>
            <div className="ap_14 violet"></div>
          </div>
            <div className="ap_2">
              <div className="ap_21">
                <div className="ap_211"></div>
                <div className="ap_212"></div>
              </div>
              <div className="ap_22 aqua"></div>
              <div className="ap_23">
                <div className="ap_231"></div>
                <div className="ap_232"></div>
              </div>
              <div className="ap_24 violet"></div>
          </div>
        </div>
        <div className="week">
          <p>Mon</p>
          <p>Tues</p>
          <p>Wed</p>
          <p>Thurs</p>
          <p>Fri</p>
          <p>Sat</p>
          <p>Sun</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard