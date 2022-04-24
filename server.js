const express = require('express');

const fileUpload = require('express-fileupload');
const app= express();
app.use(fileUpload());
const mysql = require('mysql');
const cors = require('cors');
const cookieParse = require('cookie-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const saltRound = 10;

app.use(cors({
    origin : 'http://localhost:3000',
    methods: ["GET" , "POST"],
    credentials : true,
}));

app.use(cookieParse());

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(session({
    key : 'userId',
    secret : 'oussama',
    resave : false,
    saveUninitialized : false,
    cookie : {
        expires : 60*60*24
    }
}));

app.post('/categories',(req , respond)=> {
    let sql ='select  id,name from location.cat_name;';
    con.query(sql , (err , res)=> {
        if ( err )  throw err;
        respond.send(res);
    });
});

app.post('/getCars',(req , respond)=>{
    let sql = 'select * from location.vehicule order by id desc ';
    con.query(sql , (err , res)=> {
        if (err) throw err;
        respond.send(res);
    })
});

app.post('/searchCar', (req , respond) => {
    let sql = "select * from location.vehicule where matricule LIKE '%"+req.body.matricule+"%' or marque LIKE '%"+req.body.matricule+"%'  ";
    con.query(sql , (err , res) => {
        if (err) throw err;
        respond.send(res);
    } )

});

app.post('/carAvailable',(req , respond)=> {
    let sql = "select * from location.vehicule where  "
});

app.post('/updateCar', (req , respond)=> {
    let sql = "update location.vehicule set  matricule='"+req.body.matricule+"' , marque='"+req.body.marque+"', puissance="+req.body.puissance+", kilometrage="+req.body.kilometrage+"  where id="+req.body.carId+" ";
    con.query(sql , (err , res)=> {
        if (err) throw err;
        console.log("SUCCESSFUL UPDATE");
    });
    sql = "update location.categorie set prix_location="+req.body.pr_location+" , prix_kilometrage="+req.body.pr_kilo+" where id="+req.body.catId+" ";
    con.query(sql , (err , res)=> {
        if (err) throw err;
        console.log("SUCCESFULLY UPDATED");
    });
    
});

app.post('/getCarDetails',(req , respond)=> {
    let sql = "select * from location.vehicule where id="+req.body.id+"";
    con.query(sql , (err , res)=> {
        if (err) throw err;
        else {
            let sql = "select * from location.images where car_id="+req.body.id+"";
            con.query(sql , (err , response)=> {
                if (err) throw err;
                else {
                    let sql = "select * from location.categorie c inner join location.cat_name ca on c.id_cat = ca.id where c.id="+res[0].id_cat+"";
                    con.query(sql , (err , catRes )=> {
                        if (err) throw err;
                        respond.send({carData : res , images : response , categorie : catRes});
                    })
                }
            })
        }
    });
});

app.post('/lease', (req , respond)=> {
    let sql = "insert into location.location(id_client,id_vehicule,date_depart,date_retour,payment,status) values("+req.body.id_client+","+req.body.id_vehicule+",'"+req.body.debut+"','"+req.body.fin+"',"+req.body.price+","+req.body.status+")";
    con.query(sql , (err , res)=> {
        if (err) throw err;
        respond.send(res);
    })
})

app.post('/signUp', (req , respond)=> {
    let sql = "select * from location.users where email='"+req.body.email+"' ";
    
    con.query(sql , (err , res)=> {
        if (err) {
            throw err;
        } else {
            if ( res.length > 0 ){
                respond.send({ message:'email already exists' , error : true});
            } else {
                bcrypt.hash(req.body.password , saltRound , (err , hash) => {
                    let sql = "insert into location.users(name,email,password,number) values('"+req.body.name+"','"+req.body.email+"','"+hash+"','"+req.body.number+"')  ";
                    con.query(sql , (err , res)=> {
                        if (err){
                            respond.send({message :'an error occured ' , error:true});
                        } else {
                            respond.send({message : 'inserted successfully' , error : false});
                        }
                    });
                })
            }
        }

    })
});

app.get('/signIn', (req , respond)=> {
    if (req.session.user) respond.send({user : req.session.user , logged : true});
    else respond.send({logged : false});
} )


app.post('/getCurrentLocation', (req , respond)=> {
    let sql ='select * from location.location where date_retour > curdate()';
    con.query(sql , (err, res)=> {
        if (err) throw err;
        respond.send(res);
    })
})

app.post('/signIn', (req , respond)=> {
    let sql = "select * from location.users where email='"+req.body.email+"'";
    con.query(sql , (err , res)=> {
        if (err) throw err;
        if (res.length > 0 ){
            bcrypt.compare( req.body.password , res[0].password , (err , result)=> {
                if (result){
                    // maybe future me will find problems here, redirecting to an another user or so, depending on the res/result
                    req.session.user = res;
                    respond.send({ user : res, message :'you"re authentified' , success : 'success' , error : false});
                } 
                else respond.send({message :'password incorrect' , error: true});
            })
        } else {
            respond.send({message :'no email found' , error : true});
        }

    })
});








app.post('/getCar', (req , respond)=> {
    
    
    let sql = "select * from location.vehicule v inner join location.categorie c on v.id_cat = c.id inner join location.cat_name ca on c.id_cat= ca.id where v.id="+req.body.carId+"";
    con.query(sql , (err , res) => {
        if (err) throw err;
        respond.send(res);
    });
});

app.post('/getCarImages', (req , respond) => {
    let sql= "select * from location.images where car_id="+req.body.carId+"";
    con.query(sql , (err , res) => {
        if (err) throw err;
        respond.send(res);
    })
});

app.post('/deleteCar', (req , respond)=> {
    let sql = "delete from location.vehicule where id="+req.body.carId+"";
    con.query(sql , (err , res)=> {
        if (err) throw err;
        console.log("deleted successfully");
        respond.send(res);
    })
});

app.post('/getFamousCars', (req , respond)=> {
    let sql ='select * from location.vehicule limit 4';
    con.query(sql , (err , res)=> {
        if (err) throw err;
        respond.send(res);
    })
})




app.post('/download', (req , res) => {

    insertVehiculeInfos(req.body.matricule ,
                        req.body.puissance , 
                        req.body.marque ,
                        req.body.kilometrage ,
                        req.body.selectedCat,
                        req.body.pr_kilometrage ,
                        req.body.pr_location , 
                        req.body.images );
   
});

app.post('/upload', (req , res) => {
    // console.log(req.files);
    if ( req.files === null ){
        return res.status(400).json({msg: 'No images were selected'});
    }

    if(req.files){
        let file = req.files.file;
        let names = []
        for(let i = 0 ; i < file.length; i++){
            names.push(file[i].name);
            file[i].mv( __dirname + '/client/public/uploads/'+file[i].name, function (err){
                if(err){
                    res.send('azaaaaaaaaaaaaabi');
                  //  res.send(err);
                }
            })
        }
       res.send(names);
    }
});

// DATABASE CONTROLS HERE 

const con = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: ''
});

con.connect((err)=> {
    if ( err) throw err;
    console.log('db connected')
});

const insertVehiculeInfos=(matricule,puissance,marque,kilometrage,selectedCat,pr_kilometrage,pr_location,images)=>{
    let sql ='insert into location.categorie(prix_location,prix_kilometrage,id_cat) values('+pr_location+','+pr_kilometrage+','+selectedCat+')';
    con.query(sql , function(err, res){
        if (err){
            console.log(err);
            throw err;
        }
        console.log('categorie inserted');
        insertVehicule(matricule,puissance,marque,kilometrage,res.insertId,images)
        return res.insertId;
    });
}

const insertVehicule= (matricule,puissance,marque,kilometrage,selectedCat,images) => {
    let sql = "insert into location.vehicule(matricule,puissance,marque,kilometrage,id_cat) values('"+matricule+"',"+puissance+",'"+marque+"',"+kilometrage+","+selectedCat+")";
    con.query(sql, function(err,res){
        if (err){
            console.log(err);
            throw err;
        }
        console.log("vehicule record inserted 1 :::" + res.insertId);
        insertImages(images , res.insertId);

    });
}



const insertImages=(images,id)=> { 
    for(let i=0 ; i<images.length ; i++){
        let sql = 'insert into location.images(image,car_id) values("'+images[i]+'",'+id+')';
        con.query(sql, function(err,res){
            if (err) throw err;
            console.log("image record inserted "+i);
        });
    }
}



const getCategories = () => {
    let sql ='select id from location.categorie';
    con.query(sql , (err , res)=> {
        if ( err )  throw err;
        return res;
    });
}










// SERVER START

app.listen(5000 , ()=> console.log("server started"));
