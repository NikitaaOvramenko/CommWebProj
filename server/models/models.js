const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type:DataTypes.INTEGER,primaryKey: true,autoIncrement: true}, // its a primary key in a database and must increment
    email:{type:DataTypes.STRING,unique:true}, // must be unique email
    password:{type:DataTypes.STRING}, //password might repeat tho
    role: {type:DataTypes.STRING, defaultValue:"USER"} // role can be admin or user
    
})

const Basket = sequelize.define('basket', {
    id: {type:DataTypes.INTEGER,primaryKey: true,autoIncrement: true}, // its a primary key in a database and must increment
    
})

const BasketDrug = sequelize.define('basket_drug',{
    id: {type:DataTypes.INTEGER,primaryKey: true,autoIncrement: true}, // its a primary key in a database and must increment

})


const Drug = sequelize.define('drug',{
    id: {type:DataTypes.INTEGER,primaryKey: true,autoIncrement: true}, // its a primary key in a database and must increment
    name:{type:DataTypes.STRING,unique:true,allowNull:false},
    price:{type:DataTypes.DECIMAL,allowNull:false},
    stock:{type:DataTypes.INTEGER,allowNull:false},
    rating:{type:DataTypes.INTEGER,defaultValue:0},
    img:{type:DataTypes.STRING},
})

const Type = sequelize.define('type',{
    id: {type:DataTypes.INTEGER,primaryKey: true,autoIncrement: true}, // its a primary key in a database and must increment
    name:{type:DataTypes.STRING,unique:true,allowNull:false},
})


const Brand = sequelize.define('brand',{
    id: {type:DataTypes.INTEGER,primaryKey: true,autoIncrement: true}, // its a primary key in a database and must increment
    name:{type:DataTypes.STRING,unique:true,allowNull:false},
})

const Rating = sequelize.define('rating',{
    id: {type:DataTypes.INTEGER,primaryKey: true,autoIncrement: true}, // its a primary key in a database and must increment
    rate:{type:DataTypes.DECIMAL,allowNull:false}
})

const DrugInfo = sequelize.define('drug_info',{
    id: {type:DataTypes.INTEGER,primaryKey: true,autoIncrement: true}, // its a primary key in a database and must increment
    title:{type:DataTypes.STRING,allowNull:false},
    manufacturer:{type:DataTypes.STRING,allowNull:false},
    description:{type:DataTypes.STRING,allowNull:false}
})


const TypeBrand = sequelize.define('type_brand',{
    id: {type:DataTypes.INTEGER,primaryKey: true,autoIncrement: true}, // its a primary key in a database and must increment
})


//User has one basket and each basket belongs to one user
User.hasOne(Basket);
Basket.belongsTo(User);

//Users can have many ratings but each rating belongs to one user
User.hasMany(Rating);
Rating.belongsTo(User);

//Basket has many drugs inside basket but each basket drug belongs to one basket
Basket.hasMany(BasketDrug);
BasketDrug.belongsTo(Basket);

//Each Basket Drug has one actual Drug and each Drug belongs to each Basket Drug
BasketDrug.hasOne(Drug);
Drug.belongsTo(BasketDrug);

// Type of Drug can have many Drugs but each Drug belongs to one specific Type
Type.hasMany(Drug);
Drug.belongsTo(Type);

// Brand of Drug can have many Drugs but each Drug belongs to one specific Brand
Brand.hasMany(Drug);
Drug.belongsTo(Brand);

//..
Drug.hasMany(Rating);
Rating.belongsTo(Drug);

//..
Drug.hasMany(DrugInfo);
DrugInfo.belongsTo(Drug);

//..
Type.belongsToMany(Brand,{through: TypeBrand});
Brand.belongsToMany(Type,{through: TypeBrand});

module.exports = {
    User,Basket,BasketDrug,Drug,DrugInfo,Type,Brand,TypeBrand,Rating
}












