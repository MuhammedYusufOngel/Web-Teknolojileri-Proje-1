import React, { useState } from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  const[gender, setGender] = useState();


  return (
    <div className="container">

      <div className='magic-form'>
        <Formik
        initialValues={{
          name:"", 
          surname:"", 
          age:"", 
          email:"", 
          password:"", 
          bolum:false,
          c:false, 
          cplus:false, 
          java:false, 
          python:false, 
          html:false, 
          css:false, 
          js:false,
          file: "",
          date:"",
          time:""
        }}
        validationSchema={
          Yup.object({
            name: Yup.string().required("Bu alan boş bırakılamaz"),
            surname: Yup.string().required("Bu alan boş bırakılamaz"),
            age: Yup.number().required("Bu alan boş bırakılamaz"),
            email: Yup.string().email().required("Email boş bırakılamaz"),
            password: Yup.string().required("Bu alan boş bırakılamaz"),
            bolum: Yup.string()
            .required("Bu alanı boş bırakamazsınız")
            .oneOf(["Bilgisayar Mühendisliği", "Yazılım Mühendisliği", "Bilişim Sistemleri Mühendisliği","Yok"]),
            c: Yup.boolean(),
            cplus: Yup.boolean(),
            java: Yup.boolean(),
            python: Yup.boolean(),
            html: Yup.boolean(),
            css: Yup.boolean(),
            js: Yup.boolean(),
            file:Yup.string().required("Bu alanı boş bırakamazsınız"),
            date:Yup.string().required("Bu alanı boş bırakamazsınız"),
            time:Yup.string().required("Bu alanı boş bırakamazsınız"), 
          })
        }

        onSubmit={(values, {resetForm, setSubmitting}) => {          

          setTimeout(() => {
            resetForm();
            setSubmitting(false);
            console.log({gender});
            
            const formDOM = document.getElementById('form1');

            new FormData(formDOM);

            
          formDOM.addEventListener('formdata', function(e){
            const data = e.formData;
            var request = new XMLHttpRequest();
            request.open("POST", "form.php");
            request.addEventListener('load', function(response) {
                console.log(response)
            });
            request.send(data);
          })
          }, 2000);

        }}
        >
          
          {({ values, 
            errors, 
            handleChange,
            handleSubmit,
            handleReset, 
            dirty, 
            touched,
            isSubmitting}) => 
            (
              <form onSubmit={handleSubmit} id="form1">
                <h3>Başvuru-Kayıt Formu</h3>

                <div className="cinsiyet">
                  <input 
                    id="male" 
                    type="radio" 
                    name="gender" 
                    value="Erkek"
                    onChange={e => setGender(e.target.value)} 
                  />
                  <label htmlFor="male">Erkek</label>

                  <input 
                    id="kadin" 
                    type="radio" 
                    name="gender" 
                    value="Kadın"
                    onChange={e => setGender(e.target.value)} 
                  />
                  <label htmlFor="kadin">Kadın</label>

                  <input 
                    id="belirsiz" 
                    type="radio" 
                    name="gender" 
                    value="Belirtmek Istemiyorum" 
                    onChange={e => setGender(e.target.value)} 
                  />
                  <label htmlFor="belirsiz">Belirtmek Istemiyorum</label>

                </div>

                {
                  errors.cinsiyet && touched.cinsiyet && (
                    <div className="input-feedback">
                      {errors.cinsiyet}
                    </div>
                  )
                }

                <label htmlFor="name">Ad</label><br/>
                <input 
                  id="name" 
                  type="text" 
                  className="input" 
                  value={values.name} 
                  onChange={handleChange} 
                /><br/>
                {
                  errors.name && touched.name && (
                    <div className="input-feedback">
                      {errors.name}
                    </div>
                  )
                }
                
                <label htmlFor="surname">Soyad</label><br/>
                <input 
                  id="surname" 
                  type="text" 
                  className="input" 
                  value={values.surname} 
                  onChange={handleChange} 
                /><br/>
                {
                  errors.surname && touched.surname && (
                    <div className="input-feedback">
                      {errors.surname}
                    </div>
                  )
                }

                <label htmlFor="age">Yaş</label><br/>
                <input 
                  id="age" 
                  type="text" 
                  className="input" 
                  value={values.age} 
                  onChange={handleChange} 
                /><br/>
                {
                  errors.age && touched.age && (
                    <div className="input-feedback">
                      {errors.age}
                    </div>
                  )
                }
                <label htmlFor="email">E-posta</label><br/>
                <input 
                  id="email" 
                  type="text" 
                  className="input" 
                  value={values.email} 
                  onChange={handleChange} 
                /><br/>
                
                {
                  errors.email && touched.email && (
                    <div className="input-feedback">
                      {errors.email}
                    </div>
                  )
                }
                
                <label htmlFor="password">şifre</label><br/>
                <input 
                  id="password" 
                  type="password" 
                  className="input" 
                  value={values.password} 
                  onChange={handleChange} 
                /><br/>
                
                {
                  errors.password && touched.password && (
                    <div className="input-feedback">
                      {errors.password}
                    </div>
                  )
                }

                <label htmlFor="bolum">Bölüm</label><br/>
                <select 
                  id="bolum" 
                  value={values.bolum} 
                  onChange={handleChange} 
                >
                  <option value="" label="Seçin"/>
                  <option value="Bilgisayar Mühendisliği" label="Bilgisayar Mühendisliği"/>
                  <option value="Yazılım Mühendisliği" label="Yazılım Mühendisliği"/>
                  <option value="Bilişim Sistemleri Mühendisliği" label="Bilişim Sistemleri Mühendisliği"/>
                  <option value="Okumuyorum" label="Okumuyorum"/>

                </select>

                {
                  errors.bolum && touched.bolum && (
                    <div className="input-feedback">
                      {errors.bolum}
                    </div>
                  )
                }

                <br/>


                <div className="checkbox-container">
                  <label htmlFor="bolum">Bildiğiniz dilleri seçiniz.</label><br/>
                  <input
                    id="c" 
                    type="checkbox"
                    value={values.c}
                    onChange={handleChange} 
                  />
                  <label htmlFor="agree">C</label>

                  &nbsp;&nbsp;

                  <input
                    id="cplus" 
                    type="checkbox"
                    value={values.cplus} 
                    onChange={handleChange} 
                  />
                  <label htmlFor="cplus">C++</label>
                  
                  &nbsp;&nbsp;

                  <input
                    id="java" 
                    type="checkbox"
                    value={values.java} 
                    onChange={handleChange} 
                  />
                  <label htmlFor="java">Java</label>
                  
                  &nbsp;&nbsp;

                  <input
                    id="python" 
                    type="checkbox"
                    value={values.python} 
                    onChange={handleChange} 
                  />
                  <label htmlFor="python">Python</label>

                  &nbsp;&nbsp;

                  <input
                    id="html" 
                    type="checkbox"
                    value={values.html} 
                    onChange={handleChange} 
                  />
                  <label htmlFor="html">HTML</label>

                  &nbsp;&nbsp;

                  <input
                    id="css" 
                    type="checkbox"
                    value={values.css} 
                    onChange={handleChange} 
                  />
                  <label htmlFor="css">CSS</label>

                  &nbsp;&nbsp;

                  <input
                    id="js" 
                    type="checkbox"
                    value={values.js} 
                    onChange={handleChange} 
                  />
                  <label htmlFor="js">Javascript</label>

                </div>
                  <br/><br/>

                  <label htmlFor="file">Başvuranın Fotoğrafı</label><br/>
                  <input
                    id="file" 
                    type="file"
                    value={values.file} 
                    onChange={handleChange} 
                  />

                  {
                  errors.file && touched.file && (
                    <div className="input-feedback">
                      {errors.file}
                    </div>
                  )
                  }

                  <br/><br/>

                  <label htmlFor="date">Gönderdiğiniz tarih</label><br/>
                  <input
                    id="date" 
                    type="date"
                    value={values.date} 
                    onChange={handleChange} 
                  />
                  
                  {
                  errors.date && touched.date && (
                    <div className="input-feedback">
                      {errors.date}
                    </div>
                  )
                  }
                  
                  <br/><br/>

                  <label htmlFor="date">Gönderdiğiniz saat</label><br/>
                  <input
                    id="time" 
                    type="time"
                    value={values.time} 
                    onChange={handleChange} 
                  />
                  
                  {
                  errors.time && touched.time && (
                    <div className="input-feedback">
                      {errors.time}
                    </div>
                  )
                  }
                  <br/>
  
                
                <br/>
                <br/>
                <button type="submit" className="btn btn-success" disabled={!dirty || isSubmitting}>Gönder</button>

              </form>
            )
          }


        </Formik>
      </div>
    </div>
    

  );
  
}
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js" integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ" crossorigin="anonymous"></script>

export default App;
