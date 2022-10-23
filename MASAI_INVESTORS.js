let arr=
    [
        {image:"https://masai-website-images.s3.ap-south-1.amazonaws.com/Vijay_Shekhar_Sharma_Paytm_96f52579b8.jpg",name:"Vijay Shekhar Sharma",para:"Founder & CEO",logo:"https://masai-website-images.s3.ap-south-1.amazonaws.com/paytm_rect_06df45a24f.svg"},
        {image:"https://masai-website-images.s3.ap-south-1.amazonaws.com/Rectangle_427_637d69bb57.png",name:"Kunal Shah",para:"Founder",logo:"https://masai-website-images.s3.ap-south-1.amazonaws.com/cred_0a47d7b4f8.png"},
        {image:"https://masai-website-images.s3.ap-south-1.amazonaws.com/amrish_rau_pine_labs_144e5e587c.jpg",name:"Amrish Rau",para:"CEO",logo:"https://masai-website-images.s3.ap-south-1.amazonaws.com/pine_labs_0aa2407434.png"},
        {image:"https://masai-website-images.s3.ap-south-1.amazonaws.com/Sampad_swain_Instamojo_f12bf6341e.jpg",name:"Sampad Swain",para:"Co-Founder & CEO",logo:"https://masai-website-images.s3.ap-south-1.amazonaws.com/instamojo_8763e704f7.png"},
        {image:"https://masai-website-images.s3.ap-south-1.amazonaws.com/Ankush_Sachdeva_Sharechat_4e44dbbe6b.jpg",name:"Ankush Sachdeva",para:"Co-Founder & CEO",logo:"https://masai-website-images.s3.ap-south-1.amazonaws.com/sharechat_rect_73d95cd4e1.svg"},
        {image:"https://masai-website-images.s3.ap-south-1.amazonaws.com/bhanu_pratap_singh_sharechat_11fdd7b47a.jpg",name:"Bhanu Pratap Singh",para:"Co-Founder & CTO",logo:"https://masai-website-images.s3.ap-south-1.amazonaws.com/sharechat_rect_73d95cd4e1.svg"},
        {image:"https://masai-website-images.s3.ap-south-1.amazonaws.com/farid_ahsan_sharechat_1251f28141.png",name:"Farid Ahsan",para:"Co-Founder & COO",logo:"https://masai-website-images.s3.ap-south-1.amazonaws.com/sharechat_rect_73d95cd4e1.svg"},
        {image:"https://masai-website-images.s3.ap-south-1.amazonaws.com/Amit_Kumar_Agarwal_Nobroker_a8a279ad91.jpg",name:"Amit Kumar Agarwal",para:"Founder & CEO",logo:"https://masai-website-images.s3.ap-south-1.amazonaws.com/nobroker_rect_28c9778c30.svg"},
        {image:"https://masai-website-images.s3.ap-south-1.amazonaws.com/Akhil_Gupta_Nobroker_539cd97f6c.jpg",name:"Akhil Gupta",para:"Founder & CTO",logo:"https://masai-website-images.s3.ap-south-1.amazonaws.com/nobroker_rect_28c9778c30.svg"},
        {image:"https://masai-website-images.s3.ap-south-1.amazonaws.com/saurbh_garg_nobroker_c0c71cc431.jpeg",name:"Saurabh Garg",para:"Co-Founder & CBO",logo:"https://masai-website-images.s3.ap-south-1.amazonaws.com/nobroker_rect_28c9778c30.svg"},
        {image:"https://masai-website-images.s3.ap-south-1.amazonaws.com/Vipin_Pathak_Care24_acd02cd173.jpg",name:"Vipin Pathak",para:"Co-Founder & CEO",logo:"https://masai-website-images.s3.ap-south-1.amazonaws.com/care24_1164f7a2cd.png"},
        {image:"https://masai-website-images.s3.ap-south-1.amazonaws.com/Ramakant_Sharma_livespace_0308e3627d.jpg",name:"Ramakant Sharma",para:"Founder",logo:"https://masai-website-images.s3.ap-south-1.amazonaws.com/livspace_f9318b2e8d.png"}
    ];
    arr.map(function(elem){
    let container=document.createElement("div");
    let pImage=document.createElement("img");
    pImage.setAttribute("src",elem.image);
    
    let pName=document.createElement("h3");
    pName.innerText=elem.name;

    let pPosition=document.createElement("p");
    pPosition.innerText=elem.para;

    let clogo=document.createElement("img");
    clogo.setAttribute("src",elem.logo);
    
    container.append(pImage,pName,pPosition,clogo);
    document.querySelector("body").append(container);
    })