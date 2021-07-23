class Person{
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    hello(){
        return "Hello %s, your age is %s and you are a %s",this.name, this.age, this.gender;
    }
    talk(){
        return "Any person can talk";
    }
}

export default Person