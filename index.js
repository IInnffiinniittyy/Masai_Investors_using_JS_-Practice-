 // HEADING 1 STARTS
    let h1 = document.createElement('h1');
    h1.setAttribute("id","tbmembers");
    h1.innerText = "Board Members"
    // HEADING 1 ENDS

//    DIV FOR LOGO'S STARTS
    let div1 = document.createElement('div');
    div1.setAttribute("id","tdiv1");
//    DIV FOR LOGO'S ENDS

//    ALL THREE LOGO'S STARTS
    let img1= document.createElement('img');
    img1.setAttribute("src","https://www.masaischool.com/img/our-investors/india-q-borderless.svg");
   
    let img2= document.createElement('img');
    img2.setAttribute("src","https://www.masaischool.com/img/our-investors/unitus-borderless.svg");
    
    let img3= document.createElement('img');
    img3.setAttribute("src","https://www.masaischool.com/img/our-investors/omidyar-borderless.svg");

    div1.append(img1,img2,img3)
//    ALL THREE LOGO'S ENDS

    // HEADING 2 STARTS
    let hh1 = document.createElement("h1");
    hh1.setAttribute("class","tSI");
    hh1.innerText = "Strategic Investors";
    // HEADING 2 ENDS
 
    // PHOTOS||NAME||DESIGNATION||LOGO STARTS
    let bigDiv = document.createElement('div');  // MAIN DIV AKA BIG DIV!!
    bigDiv.setAttribute("class","tPNDL");

    let sDiv1 = document.createElement('div');
    sDiv1.setAttribute("class","tPNDL1");

    let sDiv1img1 = document.createElement('img');
    sDiv1img1.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/Vijay_Shekhar_Sharma_Paytm_96f52579b8.jpg");
    sDiv1img1.setAttribute("class","timg");

    let sDiv1h1 = document.createElement('h1');
    sDiv1h1.setAttribute("class","timgh1");
    sDiv1h1.innerText = "Vijay Shekhar Sharma";

    let sDiv1h4 = document.createElement('h4');
    sDiv1h4.setAttribute("class","timgh4");
    sDiv1h4.innerText = "Founder & CEO";

    let sDiv1logo1 = document.createElement('img');
    sDiv1logo1.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/paytm_rect_06df45a24f.svg");
    sDiv1logo1.setAttribute("class","tlogo");
  
    sDiv1.append(sDiv1img1,sDiv1h1,sDiv1h4,sDiv1logo1);
    
    // -------------------------------------------------------------------

    let sDiv2 = document.createElement('div');
    sDiv2.setAttribute("class","tPNDL1");

    let sDiv1img2 = document.createElement('img');
    sDiv1img2.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/Rectangle_427_637d69bb57.png");
    sDiv1img2.setAttribute("class","timg");

    let sDiv1h11 = document.createElement('h1');
    sDiv1h11.setAttribute("class","timgh1");
    sDiv1h11.innerText = "Kunal Shah";

    let sDiv1h41 = document.createElement('h4');
    sDiv1h41.setAttribute("class","timgh4");
    sDiv1h41.innerText = "Founder";

    let sDiv1logo2 = document.createElement('img');
    sDiv1logo2.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/cred_0a47d7b4f8.png");
    sDiv1logo2.setAttribute("class","tlogo");
 
    sDiv2.append(sDiv1img2,sDiv1h11,sDiv1h41,sDiv1logo2);

    // -------------------------------------------------------------------

    let sDiv3 = document.createElement('div');
    sDiv3.setAttribute("class","tPNDL1");

    let sDiv1img3 = document.createElement('img');
    sDiv1img3.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/amrish_rau_pine_labs_144e5e587c.jpg");
    sDiv1img3.setAttribute("class","timg");

    let sDiv1h12 = document.createElement('h1');
    sDiv1h12.setAttribute("class","timgh1");
    sDiv1h12.innerText = "Amrish Rau";

    let sDiv1h42 = document.createElement('h4');
    sDiv1h42.setAttribute("class","timgh4");
    sDiv1h42.innerText = "CEO";

    let sDiv1logo3 = document.createElement('img');
    sDiv1logo3.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/pine_labs_0aa2407434.png");
    sDiv1logo3.setAttribute("class","tlogo");

    sDiv3.append(sDiv1img3,sDiv1h12,sDiv1h42,sDiv1logo3);


    // -------------------------------------------------------------------

    let sDiv4 = document.createElement('div');
    sDiv4.setAttribute("class","tPNDL1");

    let sDiv1img4 = document.createElement('img');
    sDiv1img4.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/Sampad_swain_Instamojo_f12bf6341e.jpg");
    sDiv1img4.setAttribute("class","timg");

    let sDiv1h13 = document.createElement('h1');
    sDiv1h13.setAttribute("class","timgh1");
    sDiv1h13.innerText = "Sampad Swain";

    let sDiv1h43 = document.createElement('h4');
    sDiv1h43.setAttribute("class","timgh4");
    sDiv1h43.innerText = "Co-Founder & CEO";

    let sDiv1logo4 = document.createElement('img');
    sDiv1logo4.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/instamojo_8763e704f7.png");
    sDiv1logo4.setAttribute("class","tlogo");

    
    sDiv4.append(sDiv1img4,sDiv1h13,sDiv1h43,sDiv1logo4);


    // -------------------------------------------------------------------
 
    let sDiv5 = document.createElement('div');
    sDiv5.setAttribute("class","tPNDL1");

    let sDiv1img5 = document.createElement('img');
    sDiv1img5.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/Ankush_Sachdeva_Sharechat_4e44dbbe6b.jpg");
    sDiv1img5.setAttribute("class","timg");

    let sDiv1h14 = document.createElement('h1');
    sDiv1h14.setAttribute("class","timgh1");
    sDiv1h14.innerText = "Ankush Sachdeva";

    let sDiv1h44 = document.createElement('h4');
    sDiv1h44.setAttribute("class","timgh4");
    sDiv1h44.innerText = "Co-Founder & CEO";

    let sDiv1logo5 = document.createElement('img');
    sDiv1logo5.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/sharechat_rect_73d95cd4e1.svg");
    sDiv1logo5.setAttribute("class","tlogo");
  
    sDiv5.append(sDiv1img5,sDiv1h14,sDiv1h44,sDiv1logo5);

    // -------------------------------------------------------------------

    let sDiv6 = document.createElement('div');
    sDiv6.setAttribute("class","tPNDL1");

    let sDiv1img6 = document.createElement('img');
    sDiv1img6.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/bhanu_pratap_singh_sharechat_11fdd7b47a.jpg");
    sDiv1img6.setAttribute("class","timg");

    let sDiv1h15 = document.createElement('h1');
    sDiv1h15.setAttribute("class","timgh1");
    sDiv1h15.innerText = "Bhanu Pratap Singh";

    let sDiv1h45 = document.createElement('h4');
    sDiv1h45.setAttribute("class","timgh4");
    sDiv1h45.innerText = "Co-Founder & CTO";

    let sDiv1logo6 = document.createElement('img');
    sDiv1logo6.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/sharechat_rect_73d95cd4e1.svg");
    sDiv1logo6.setAttribute("class","tlogo");
  
    sDiv6.append(sDiv1img6,sDiv1h15,sDiv1h45,sDiv1logo6);

    // -------------------------------------------------------------------


    let sDiv7 = document.createElement('div');
    sDiv7.setAttribute("class","tPNDL1");

    let sDiv1img7 = document.createElement('img');
    sDiv1img7.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/farid_ahsan_sharechat_1251f28141.png");
    sDiv1img7.setAttribute("class","timg");

    let sDiv1h16 = document.createElement('h1');
    sDiv1h16.setAttribute("class","timgh1");
    sDiv1h16.innerText = "Farid Ahsan";

    let sDiv1h46 = document.createElement('h4');
    sDiv1h46.setAttribute("class","timgh4");
    sDiv1h46.innerText = "Co-Founder & COO";

    let sDiv1logo7 = document.createElement('img');
    sDiv1logo7.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/sharechat_rect_73d95cd4e1.svg");
    sDiv1logo7.setAttribute("class","tlogo");

    
    sDiv7.append(sDiv1img7,sDiv1h16,sDiv1h46,sDiv1logo7);


    // -------------------------------------------------------------------

  

    let sDiv8 = document.createElement('div');
    sDiv8.setAttribute("class","tPNDL1");

    let sDiv1img8 = document.createElement('img');
    sDiv1img8.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/Amit_Kumar_Agarwal_Nobroker_a8a279ad91.jpg");
    sDiv1img8.setAttribute("class","timg");

    let sDiv1h17 = document.createElement('h1');
    sDiv1h17.setAttribute("class","timgh1");
    sDiv1h17.innerText = "Amit Kumar Agarwal";

    let sDiv1h47 = document.createElement('h4');
    sDiv1h47.setAttribute("class","timgh4");
    sDiv1h47.innerText = "Founder & CEO";

    let sDiv1logo8 = document.createElement('img');
    sDiv1logo8.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/nobroker_rect_28c9778c30.svg");
    sDiv1logo8.setAttribute("class","tlogo");

    
    sDiv8.append(sDiv1img8,sDiv1h17,sDiv1h47,sDiv1logo8);

    // -------------------------------------------------------------------

  

    let sDiv9 = document.createElement('div');
    sDiv9.setAttribute("class","tPNDL1");

    let sDiv1img9 = document.createElement('img');
    sDiv1img9.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/Akhil_Gupta_Nobroker_539cd97f6c.jpg");
    sDiv1img9.setAttribute("class","timg");

    let sDiv1h18 = document.createElement('h1');
    sDiv1h18.setAttribute("class","timgh1");
    sDiv1h18.innerText = "Akhil Gupta";

    let sDiv1h48 = document.createElement('h4');
    sDiv1h48.setAttribute("class","timgh4");
    sDiv1h48.innerText = "Founder & CTO";

    let sDiv1logo9 = document.createElement('img');
    sDiv1logo9.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/nobroker_rect_28c9778c30.svg");
    sDiv1logo9.setAttribute("class","tlogo");

    
    sDiv9.append(sDiv1img9,sDiv1h18,sDiv1h48,sDiv1logo9);


    // -------------------------------------------------------------------



    let sDiv10 = document.createElement('div');
    sDiv10.setAttribute("class","tPNDL1");

    let sDiv1img10 = document.createElement('img');
    sDiv1img10.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/saurbh_garg_nobroker_c0c71cc431.jpeg");
    sDiv1img10.setAttribute("class","timg");

    let sDiv1h19 = document.createElement('h1');
    sDiv1h19.setAttribute("class","timgh1");
    sDiv1h19.innerText = "Saurabh Garg";

    let sDiv1h49 = document.createElement('h4');
    sDiv1h49.setAttribute("class","timgh4");
    sDiv1h49.innerText = "Co-Founder & CBO";

    let sDiv1logo10 = document.createElement('img');
    sDiv1logo10.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/nobroker_rect_28c9778c30.svg");
    sDiv1logo10.setAttribute("class","tlogo");

    
    sDiv10.append(sDiv1img10,sDiv1h19,sDiv1h49,sDiv1logo10);


    // -------------------------------------------------------------------

  

    let sDiv11 = document.createElement('div');
    sDiv11.setAttribute("class","tPNDL1");

    let sDiv1img11 = document.createElement('img');
    sDiv1img11.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/Vipin_Pathak_Care24_acd02cd173.jpg");
    sDiv1img11.setAttribute("class","timg");

    let sDiv1h110 = document.createElement('h1');
    sDiv1h110.setAttribute("class","timgh1");
    sDiv1h110.innerText = "Vipin Pathak";

    let sDiv1h410 = document.createElement('h4');
    sDiv1h410.setAttribute("class","timgh4");
    sDiv1h410.innerText = "Co-Founder & CEO";

    let sDiv1logo11 = document.createElement('img');
    sDiv1logo11.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/care24_1164f7a2cd.png");
    sDiv1logo11.setAttribute("class","tlogo");

    
    sDiv11.append(sDiv1img11,sDiv1h110,sDiv1h410,sDiv1logo11);


    // -------------------------------------------------------------------

   

    let sDiv12 = document.createElement('div');
    sDiv12.setAttribute("class","tPNDL1");

    let sDiv1img12 = document.createElement('img');
    sDiv1img12.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/Ramakant_Sharma_livespace_0308e3627d.jpg");
    sDiv1img12.setAttribute("class","timg");

    let sDiv1h111 = document.createElement('h1');
    sDiv1h111.setAttribute("class","timgh1");
    sDiv1h111.innerText = "Ramakant Sharma";

    let sDiv1h411 = document.createElement('h4');
    sDiv1h411.setAttribute("class","timgh4");
    sDiv1h411.innerText = "Founder";

    let sDiv1logo12 = document.createElement('img');
    sDiv1logo12.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/livspace_f9318b2e8d.png");
    sDiv1logo12.setAttribute("class","tlogo");

    
    sDiv12.append(sDiv1img12,sDiv1h111,sDiv1h411,sDiv1logo12);


    // -------------------------------------------------------------------

  

    let sDiv13 = document.createElement('div');
    sDiv13.setAttribute("class","tPNDL1");

    let sDiv1img13 = document.createElement('img');
    sDiv1img13.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/Mohit_Tandon_Delhivery_b43fee16c4.jpg");
    sDiv1img13.setAttribute("class","timg");

    let sDiv1h112 = document.createElement('h1');
    sDiv1h112.setAttribute("class","timgh1");
    sDiv1h112.innerText = "Mohit Tandon";

    let sDiv1h412 = document.createElement('h4');
    sDiv1h412.setAttribute("class","timgh4");
    sDiv1h412.innerText = "Co-Founder";

    let sDiv1logo13 = document.createElement('img');
    sDiv1logo13.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/delhivery_17e85a76ed.png");
    sDiv1logo13.setAttribute("class","tlogo");

    
    sDiv13.append(sDiv1img13,sDiv1h112,sDiv1h412,sDiv1logo13);


    // -------------------------------------------------------------------

 

    let sDiv14 = document.createElement('div');
    sDiv14.setAttribute("class","tPNDL1");

    let sDiv1img14 = document.createElement('img');
    sDiv1img14.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/Abhishek_Goyal_tracxn_5b2f61d87d.jpg");
    sDiv1img14.setAttribute("class","timg");

    let sDiv1h113 = document.createElement('h1');
    sDiv1h113.setAttribute("class","timgh1");
    sDiv1h113.innerText = "Abhishek Goyal";

    let sDiv1h413 = document.createElement('h4');
    sDiv1h413.setAttribute("class","timgh4");
    sDiv1h413.innerText = "Co-Founder";

    let sDiv1logo14 = document.createElement('img');
    sDiv1logo14.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/tracxn_6d0c3de2ee.svg");
    sDiv1logo14.setAttribute("class","tlogo");

    
    sDiv14.append(sDiv1img14,sDiv1h113,sDiv1h413,sDiv1logo14);


    // -------------------------------------------------------------------

   

    let sDiv15 = document.createElement('div');
    sDiv15.setAttribute("class","tPNDL1");

    let sDiv1img15 = document.createElement('img');
    sDiv1img15.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/Anurag_Jain_Kredx_b6ed6a31c6.jpg");
    sDiv1img15.setAttribute("class","timg");

    let sDiv1h114 = document.createElement('h1');
    sDiv1h114.setAttribute("class","timgh1");
    sDiv1h114.innerText = "Anurag Jain";

    let sDiv1h414 = document.createElement('h4');
    sDiv1h414.setAttribute("class","timgh4");
    sDiv1h414.innerText = "Founder & Executive Director";

    let sDiv1logo15 = document.createElement('img');
    sDiv1logo15.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/kredx_rect_204437078a.svg");
    sDiv1logo15.setAttribute("class","tlogo");

    
    sDiv15.append(sDiv1img15,sDiv1h114,sDiv1h414,sDiv1logo15);


    // -------------------------------------------------------------------

   

    let sDiv16 = document.createElement('div');
    sDiv16.setAttribute("class","tPNDL1");

    let sDiv1img16 = document.createElement('img');
    sDiv1img16.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/Harshvardhan_Lunia_Lendingkart_44d72a6fcd.jpg");
    sDiv1img16.setAttribute("class","timg");

    let sDiv1h115 = document.createElement('h1');
    sDiv1h115.setAttribute("class","timgh1");
    sDiv1h115.innerText = "Harshvardhan Lunia";

    let sDiv1h415 = document.createElement('h4');
    sDiv1h415.setAttribute("class","timgh4");
    sDiv1h415.innerText = "Co-Founder & CEO";

    let sDiv1logo16 = document.createElement('img');
    sDiv1logo16.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/lendingkart_rect_d0d30d7b53.svg");
    sDiv1logo16.setAttribute("class","tlogo");

    
    sDiv16.append(sDiv1img16,sDiv1h115,sDiv1h415,sDiv1logo16);


    // -------------------------------------------------------------------

  

    let sDiv17 = document.createElement('div');
    sDiv17.setAttribute("class","tPNDL1");

    let sDiv1img17 = document.createElement('img');
    sDiv1img17.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/sunil_rao_amazon_dfd2daa06d.jpeg");
    sDiv1img17.setAttribute("class","timg");

    let sDiv1h116 = document.createElement('h1');
    sDiv1h116.setAttribute("class","timgh1");
    sDiv1h116.innerText = "Sunil Rao";

    let sDiv1h416 = document.createElement('h4');
    sDiv1h416.setAttribute("class","timgh4");
    sDiv1h416.innerText = "Country Head Strategy and Corporation";

    let sDiv1logo17 = document.createElement('img');
    sDiv1logo17.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/amazon_rect_9e0cd101b1.svg");
    sDiv1logo17.setAttribute("class","tlogo");

    
    sDiv17.append(sDiv1img17,sDiv1h116,sDiv1h416,sDiv1logo17);


    // -------------------------------------------------------------------

   

    let sDiv18 = document.createElement('div');
    sDiv18.setAttribute("class","tPNDL1");

    let sDiv1img18 = document.createElement('img');
    sDiv1img18.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/Sharda_Balaji_Novojuris_2a206f2f88.jpg");
    sDiv1img18.setAttribute("class","timg");

    let sDiv1h117 = document.createElement('h1');
    sDiv1h117.setAttribute("class","timgh1");
    sDiv1h117.innerText = "Sharda Balaji";

    let sDiv1h417 = document.createElement('h4');
    sDiv1h417.setAttribute("class","timgh4");
    sDiv1h417.innerText = "Founder";

    let sDiv1logo18 = document.createElement('img');
    sDiv1logo18.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/novojuris_ad9499f5b9.svg");
    sDiv1logo18.setAttribute("class","tlogo");

    
    sDiv18.append(sDiv1img18,sDiv1h117,sDiv1h417,sDiv1logo18);


    // -------------------------------------------------------------------


    let sDiv19 = document.createElement('div');
    sDiv19.setAttribute("class","tPNDL1");

    let sDiv1img19 = document.createElement('img');
    sDiv1img19.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/Kulin_Shah_Onsurity_0dd3a1802f.jpg");
    sDiv1img19.setAttribute("class","timg");

    let sDiv1h118 = document.createElement('h1');
    sDiv1h118.setAttribute("class","timgh1");
    sDiv1h118.innerText = "Kulin Shah";

    let sDiv1h418 = document.createElement('h4');
    sDiv1h418.setAttribute("class","timgh4");
    sDiv1h418.innerText = "Co-Founder";

    let sDiv1logo19 = document.createElement('img');
    sDiv1logo19.setAttribute("src","https://masai-website-images.s3.ap-south-1.amazonaws.com/onsurity_5500f1c3b1.png");
    sDiv1logo19.setAttribute("class","tlogo");

    
    sDiv19.append(sDiv1img19,sDiv1h118,sDiv1h418,sDiv1logo19);


    // -------------------------------------------------------------------


    // PHOTOS||NAME||DESIGNATION||LOGO ENDS


    bigDiv.append(sDiv1,sDiv2,sDiv3,sDiv4,sDiv5,sDiv6,sDiv7,sDiv8,sDiv9,sDiv10,sDiv11,sDiv12,sDiv13,sDiv14,sDiv15,sDiv16,sDiv17,sDiv18,sDiv19);

   
    
    document.body.append(h1,div1,hh1,bigDiv);