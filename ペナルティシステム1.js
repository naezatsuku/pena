// Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
    // TODO: Add SDKs for Firebase products that you want to use
    
//追加（firebasejs/以降のバージョンを合わせて書き換える）
import { getFirestore, doc, collection, setDoc, addDoc, getDocs, updateDoc, deleteDoc, deleteField,serverTimestamp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyDYaFPYJXXyZIDwSXos2OfjI8sp1hwxAX4",
      authDomain: "tete-8f7c9.firebaseapp.com",
      projectId: "tete-8f7c9",
      storageBucket: "tete-8f7c9.appspot.com",
      messagingSenderId: "820077320180",
      appId: "1:820077320180:web:3e7e3002bbe8ef70784ba1"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    console.log(app);
    const c=collection(db,"Users");
    const q=await getDocs(c);
    let array=[];
    q.forEach((doc)=>{
        array.push({...doc.data()})
      

    })
    
    console.log(array);
    //読み込み時に前回のペナルティ数を表示させる関数を書く
    let nums=["n1","n2","n3","n4","n5","n6","n7","n8","n9","n10","n11","n12","n13","n14","n15","n16","n17","n18","n19","n20","n21","n22"];
    
    function load1(){
        for(let i=0;i<nums.length;i++){
            let tar_id=nums[i];
            let tar_num=document.getElementById(tar_id).textContent;
            console.log(tar_id,tar_num);
            updateDoc("FAIh1S5251cJT7WKX62g",{
            
            tar_id:tar_num
        })
        
    }
        }

        
    

    load();
        function load(){
        for(let i=0;i<nums.length;i++){
            let tar_id=nums[i];
            let tar_num=array[0][tar_id];
            console.log(tar_id,tar_num);
            document.getElementById(tar_id).textContent=tar_num;
        }

    }

    
     
