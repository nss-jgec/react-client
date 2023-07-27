import { useState } from "react";
import "../utils/curatorIO.css";
// import React from "react";
// import image1 from '../../public/feedSection/image1.jpg'
// import imag2 from '../../public/feedSection/image2.jpg'
// import image3 from '../../public/feedSection/image3.jpg'
// import image4 from '../../public/feedSection/image4.jpg'
// import image5 from '../../public/feedSection/image5.jpg'
// import image6 from '../../public/feedSection/image6.jpg'


// class CuratorWidget extends React.Component {
//   constructor(props) {
//     super(props);
//     this.loadScript = this.loadScript.bind(this);
//   }

//   loadScript(src, libraryId) {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = src;
//       script.id = libraryId;
//       document.body.appendChild(script);

//       script.onload = () => {
//         // add a small timeout to give it time to load
//         setTimeout(() => {
//           resolve(true);
//         }, 100);
//       };
//     });
//   }

//   componentDidMount() {
//     this.loadScript(
//       "https://cdn.curator.io/published/" + this.props.feedId + ".js"
//     );
//   }

//   render() {
//     return <div id="" data-crt-feed-id={this.props.feedId}></div>;
//   }
// }

export default function Feed({des}) {
  const [showModal, setShowModal] = useState(false)
  const Modal = () =>{
    if(!showModal) return null

    return (
      <div className="w-full min-h-screen flex justify-center items-center bg-white">
        <div className="w-1/3">
          <div>{des}</div>
        </div>
      </div>
    )
  }
  return (
    <div className="min-h-[calc(100vh-217px)] w-full my-5 flex flex-col justify-center items-center">
      <div className="text-lg mt-[3.1rem] mb-10 mx-auto border-b-2 border-yellow-500 w-fit">Feed</div>
      {/* <CuratorWidget feedId="29b5a66f-f2ed-4aa8-937b-40eee8cfe38c" /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mx-auto ">
      <div style={{backgroundImage: `url('./feedSection/image1.jpg')`,}} 
        className="group w-56 h-56 border overflow-hidden border-black bg-cover rounded-sm">
          <div className="w-full h-[75%] overflow-auto opacity-0 group-hover:opacity-100 bg-white duration-150 p-1">
            <div className="w-full text-center font-semibold text-black/50 my-2">
              <a href="https://www.instagram.com/p/CvJ3s1RBYQy/" target="_blank">@nss_jgec</a>
            </div>
            <p>
            On this solemn occasion of Kargil Vijay Diwas, we gather to pay homage and express our deepest appreciation to the brave souls who exhibited unparalleled courage and unwavering determination during the Kargil conflict. Today, we commemorate the victory of our valiant soldiers, who selflessly defended our motherland and triumphed against all odds.
            <br />
            As we look back at the events of the Kargil War, we are reminded of the immense sacrifices made by our soldiers and their families. Their dedication, resilience, and sense of duty in the face of adversity are nothing short of awe-inspiring. They showed us what it means to put the nation above everything else and protect the freedom we cherish so dearly.
            <br />
            Through the harshest terrains, treacherous conditions, and under the constant threat of enemy fire, our bravehearts demonstrated their unwavering commitment to safeguarding our borders. Their valorous acts exemplify the true spirit of the Indian Armed Forces, and their stories will forever inspire generations to come.
            <br />
            Kargil Vijay Diwas stands not only as a reminder of the triumph of our armed forces but also as a testament to the unity and strength of our nation. It is a day to remember and honor every soldier who fought selflessly and every family who endured the pain of separation.
            <br />
            As citizens of this great country, we owe a debt of gratitude to each member of the armed forces, past and present, who have dedicated their lives to safeguarding our freedom and territorial integrity. We must also extend our support and care to the families of our brave martyrs, who continue to bear the pain of their loss.
            <br />
            Let us take this day as an opportunity to renew our commitment to the ideals our heroes fought for - unity, integrity, and freedom. May we never forget their sacrifices and always cherish the gift of living in a free and sovereign India.
            <br />
            Today, we salute you, dear soldiers, for your exceptional bravery and valor. You are the embodiment of our nation's strength and pride.
            <br/>
            Jai Hind!
            <br/>
            #socialservice #nssjgec #NssIndia #nssvolunteers #nss #NSS2023 #kargil #kargilvijaydiwas #india #armedforces #patriots #indianarmy
            </p>
          </div>
          <div className="w-full h-[25%] group-hover:bg-white duration-150 flex justify-center items-center">
            <button
            className="p-2 px-3 op bg-blue-500/80 opacity-0 group-hover:opacity-100 duration-150 
            rounded-full">Show more</button>
          </div>
        </div>

        <div style={{backgroundImage: `url('./feedSection/image2.jpg')`,}} 
        className="group w-56 h-56 border overflow-hidden border-black bg-cover rounded-sm">
          <div className="w-full h-[75%] overflow-auto opacity-0 group-hover:opacity-100 bg-white duration-150 p-1">
            <div className="w-full text-center font-semibold text-black/50 my-2">
              <a href="https://www.instagram.com/p/CrUupkDy7YN/" target="_blank">@nss_jgec</a>
            </div>
            <p>Eid Mubarak!!!</p>
            <p>
              May Allah send His love like sunshine in His warm and gentle ways to fill every corner of our hearts and fill our life with a lot of happiness.
              <br />
              #eidmubarak #eid #eid2023 #nssjgec #nss #nss2023 #india #explorepage</p>
          </div>
          <div className="w-full h-[25%] group-hover:bg-white duration-150 flex justify-center items-center">
            <button
            className="p-2 px-3 op bg-blue-500/80 opacity-0 group-hover:opacity-100 duration-150 
            rounded-full">Show more</button>
          </div>
        </div>

        <div style={{backgroundImage: `url('./feedSection/image3.jpg')`,}} 
        className="group w-56 h-56 border overflow-hidden border-black bg-cover rounded-sm">
          <div className="w-full h-[75%] overflow-auto opacity-0 group-hover:opacity-100 bg-white duration-150 p-1">
            <div className="w-full text-center font-semibold text-black/50 my-2">
              <a href="https://www.instagram.com/p/Cuts7vdh7fi/" target="_blank">@nss_jgec</a>
            </div>
            <p>
            NSS Unit, JGEC wishes the heartiest congratulations to all the scientists, engineers, and support team for the successful launch of Chandrayan-3. We will eagerly wait for the 23rd of August for successful completion of the mission.
            <br />
            @isro.in
            @chandrayan_3
            <br />
            #socialservice #nssjgec #NssIndia #isroindia #Chandrayaan3 #nssvolunteers #nss #ISRO #NSS2023 #nsscamp #spaceexploration #indiaspacesuperpowe
            </p>
          </div>
          <div className="w-full h-[25%] group-hover:bg-white duration-150 flex justify-center items-center">
            <button
            className="p-2 px-3 op bg-blue-500/80 opacity-0 group-hover:opacity-100 duration-150 
            rounded-full">Show more</button>
          </div>
        </div>

        <div style={{backgroundImage: `url('./feedSection/image4.jpg')`,}} 
        className="group w-56 h-56 border overflow-hidden border-black bg-cover rounded-sm">
          <div className="w-full h-[75%] overflow-auto opacity-0 group-hover:opacity-100 bg-white duration-150 p-1">
            <div className="w-full text-center font-semibold text-black/50 my-2">
              <a href="https://www.instagram.com/p/Ct_W-syBmc1/" target="_blank">@nss_jgec</a>
            </div>
            <p>
            "You don’t have to control your thoughts. You just have to stop letting them control you." — Dan Millman
            <br />
            Felicitations!! 🎉
            <br />
            National Service Scheme Unit of Jalpaiguri Government Engineering College is presenting you the last webinar of the series on "Stress and Depression Identification and Crisis Management" as part of the Project Disha: A Pace towards Enlightenment, by Partha Pratim Roy, Clinical Psychologist, Secretary of Psychogenesis Research Foundation, Kolkata. 🥸
            <br />
            In this last Phase of the Project Disha: A Pace Towards Enlightenment that is STRESS AND DEPRESSION IDENTIFICATION AND CRISIS MANAGEMENT, participants will learn how to identify signs of stress and depression and acquire essential crisis management skills to support themselves and others. 😎
            <br />
            Date: 16th JULY 🗓
            Time: 7 P.M. Onwards 🕖
            <br />
            Joinees will get a participation certificate after attending the webinar.
            <br />
            Registration Procedure: 📝
            • Register yourself in the following link given in the bio☝️
              <br />
            • Every part icipant will be added to a WhatsApp group after every successful registration.
              <br />
            • REGISTRATION DEADLINE:
            <br />
            11.59 P.M., 14th July, 2023
            <br />
            For more details, contact:
            <br />
            Adrita Mandal
            (Ph. +919679953824)
            <br />
            Sandipan Chatterjee
            (Ph. +918258977597)

            #socialservice #armedforces #nssjgec #NssIndia #onlinecounseling #crisismanagement #nssvolunteers #nss #careergoals #careeropportunities #NSS2023 #nsscamp
            </p>
          </div>
          <div className="w-full h-[25%] group-hover:bg-white duration-150 flex justify-center items-center">
            <button
            className="p-2 px-3 op bg-blue-500/80 opacity-0 group-hover:opacity-100 duration-150 
            rounded-full">Show more</button>
          </div>
        </div>

        <div style={{backgroundImage: `url('./feedSection/image5.jpg')`,}} 
        className="group w-56 h-56 border overflow-hidden border-black bg-cover rounded-sm">
          <div className="w-full h-[75%] overflow-auto opacity-0 group-hover:opacity-100 bg-white duration-150 p-1">
            <div className="w-full text-center font-semibold text-black/50 my-2">
              <a href="https://www.instagram.com/p/CsfUZdLSAM3/" target="_blank">@nss_jgec</a>
            </div>
            <p>
            21st May is observed as Anti-Terrorism Day in Indian history.
            <br />
            The objective behind the observance of this day is to wean away the youth from terrorism and the cult of violence by highlighting the sufferings of common people and showing as to how it is prejudicial to the national interest.
            <br />
            This day is observed in India to commemorate the death anniversary of former Indian PM Rajiv Gandhi.
            <br />
            It is necessary to propagate the message of humanity and peace. The Indian Government has taken the step of celebrating Anti-Terrorism every year to highlight the importance of fighting the activities of terrorism.
            <br />
            #antiterrorism #g20 #nssjgec #nss2023 #nss
            </p>
          </div>
          <div className="w-full h-[25%] group-hover:bg-white duration-150 flex justify-center items-center">
            <button
            className="p-2 px-3 op bg-blue-500/80 opacity-0 group-hover:opacity-100 duration-150 
            rounded-full">Show more</button>
          </div>
        </div>

        <div style={{backgroundImage: `url('./feedSection/image6.jpg')`,}} 
        className="group w-56 h-56 border overflow-hidden border-black bg-cover rounded-sm">
          <div className="w-full h-[75%] overflow-auto opacity-0 group-hover:opacity-100 bg-white duration-150 p-1">
            <div className="w-full text-center font-semibold text-black/50 my-2">
              <a href="https://www.instagram.com/p/Cq9k-DpPyv7/" target="_blank">@nss_jgec</a>
            </div>
            <p>
            𝘯𝘦 𝘰𝘧 𝘵𝘩𝘦 𝘮𝘰𝘴𝘵 𝘣𝘳𝘶𝘵𝘢𝘭 𝘮𝘢𝘴𝘴𝘢𝘤𝘳𝘦 𝘰𝘯 13𝘵𝘩 𝘈𝘱𝘳𝘪𝘭 , 1919 𝘸𝘩𝘦𝘳𝘦 𝘢 𝘭𝘢𝘳𝘨𝘦 𝘱𝘦𝘢𝘤𝘦𝘧𝘶𝘭 𝘤𝘳𝘰𝘸𝘥 𝘨𝘢𝘵𝘩𝘦𝘳𝘦𝘥 𝘪𝘯 𝘈𝘮𝘳𝘪𝘵𝘴𝘢𝘳 𝘵𝘰 𝘱𝘳𝘰𝘵𝘦𝘴𝘵 𝘢𝘨𝘢𝘪𝘯𝘴𝘵 𝘙𝘰𝘸𝘭𝘢𝘵𝘵 𝘈𝘤𝘵 𝘣𝘶𝘵 𝘸𝘦𝘳𝘦 𝘴𝘩𝘰𝘵 𝘶𝘯𝘵𝘪𝘭 𝘵𝘩𝘦 𝘢𝘮𝘮𝘶𝘯𝘪𝘵𝘪𝘰𝘯𝘴 𝘸𝘦𝘳𝘦 𝘦𝘹𝘩𝘢𝘶𝘴𝘵𝘦𝘥 𝘣𝘺 𝘵𝘩𝘦 𝘮𝘪𝘭𝘭𝘪𝘵𝘢𝘳𝘺 𝘵𝘳𝘰𝘰𝘱𝘴.
            <br />
            1. 𝘛𝘩𝘦 𝘮𝘢𝘴𝘴𝘢𝘤𝘳𝘦 𝘸𝘢𝘴 𝘭𝘦𝘥 𝘣𝘺 𝘎𝘦𝘯𝘦𝘳𝘢𝘭 𝘙𝘦𝘨𝘪𝘯𝘢𝘭𝘥 𝘌𝘥𝘸𝘢𝘳𝘥 𝘏𝘢𝘳𝘳𝘺 𝘋𝘺𝘦𝘳.
            <br />
            2. 𝘌𝘴𝘵𝘪𝘮𝘢𝘵𝘦𝘥 𝘥𝘦𝘢𝘵𝘩𝘴 𝘸𝘦𝘳𝘦 𝘢𝘳𝘰𝘶𝘯𝘥 379 𝘵𝘰 1500 𝘢𝘯𝘥 𝘢 𝘭𝘰𝘵 𝘮𝘰𝘳𝘦 𝘸𝘦𝘳𝘦 𝘪𝘯𝘫𝘶𝘳𝘦𝘥 .
            <br />
            3. 𝘈𝘭𝘭 𝘵𝘩𝘦 𝘵𝘩𝘳𝘦𝘦 𝘦𝘹𝘪𝘵𝘴 𝘸𝘦𝘳𝘦 𝘣𝘭𝘰𝘤𝘬𝘦𝘥 𝘦𝘹𝘤𝘦𝘱𝘵 𝘰𝘯𝘦 𝘢𝘯𝘥 𝘵𝘩𝘦 𝘧𝘪𝘳𝘪𝘯𝘨 𝘴𝘵𝘢𝘳𝘵𝘦𝘥 𝘶𝘯𝘢𝘯𝘯𝘰𝘶𝘯𝘤𝘦𝘥 𝘣𝘺 𝘓𝘦𝘦 𝘌𝘯𝘧𝘪𝘦𝘭𝘥 𝘳𝘪𝘧𝘭𝘦𝘴.
            <br />
            #jalianwalabagh #india #martyrsofindia #martyrs #nss2023 #nssjgec #explorepage #history
            </p>
          </div>
          <div className="w-full h-[25%] group-hover:bg-white duration-150 flex justify-center items-center">
            <button
            className="p-2 px-3 op bg-blue-500/80 opacity-0 group-hover:opacity-100 duration-150 
            rounded-full">Show more</button>
          </div>
        </div>

        <div style={{backgroundImage: `url('./feedSection/image7.jpg')`,}} 
        className="group w-56 h-56 border overflow-hidden border-black bg-cover rounded-sm">
          <div className="w-full h-[75%] overflow-auto opacity-0 group-hover:opacity-100 bg-white duration-150 p-1">
            <div className="w-full text-center font-semibold text-black/50 my-2">
              <a href="https://www.instagram.com/p/CrioLlZSBbD/" target="_blank">@nss_jgec</a>
            </div>
            <p>
              FIRST AID AWARNESS CAMP 🏥
              <br />
              NSS UNIT, JALPAIGURI GOVERNMENT ENGINEERING COLLEGE, in collaboration with JALPAIGURI SADAR HOSPITAL, is going to organise a First Aid Awareness Program.
              <br />
              This is going to cover various basic hands-on medical training such as performing CPR , treating minor cuts, as well as bandaging and lecture on prevention of several contagious diseases.
            </p>
          </div>
          <div className="w-full h-[25%] group-hover:bg-white duration-150 flex justify-center items-center">
            <button
            className="p-2 px-3 op bg-blue-500/80 opacity-0 group-hover:opacity-100 duration-150 
            rounded-full">Show more</button>
          </div>
        </div>

        <div style={{backgroundImage: `url('./feedSection/image8.jpg')`,}} 
        className="group w-56 h-56 border overflow-hidden border-black bg-cover rounded-sm">
          <div className="w-full h-[75%] overflow-auto opacity-0 group-hover:opacity-100 bg-white duration-150 p-1">
            <div className="w-full text-center font-semibold text-black/50 my-2">
              <a href="https://www.instagram.com/p/CrC2n4tSmVq/" target="_blank">nss_jgec</a>
            </div>
            <p>
              "হেথা হতে যাও, পুরাতন।
              হেথায় নূতন খেলা আরম্ভ হয়েছে।
              আবার বাজিছে বাঁশি, আবার উঠিছে হাসি,
              বসন্তের বাতাস বয়েছে।"

              নববর্ষের নবীন সূর্যের তেজে দূরে সরে যাক যত পুরাতন গ্লানি ও দুঃখ। নবীনতর আনন্দে এক হয়ে যাক সমগ্র জাতির সুখ। রাষ্ট্রীয় সেবা যোজনার পক্ষ থেকে সকলকে জানাই নববর্ষের প্রীতি, শুভেচ্ছা ও অভিনন্দন।
            </p>
          </div>
          <div className="w-full h-[25%] group-hover:bg-white duration-150 flex justify-center items-center">
            <button
            className="p-2 px-3 op bg-blue-500/80 opacity-0 group-hover:opacity-100 duration-150 
            rounded-full">Show more</button>
          </div>
        </div>

      </div>
    </div>
  );
}
