
// destructuring assignment
const course = {
    title: 'JavaScript - The Complete Guide',
    level: 'Beginner to Advanced',
    price: 29.99,
   courseInstructor: 'Rishav',
    courseDuration: '30 hours',
    courseLanguage: 'English'
};
// course.courseInstructor
const{courseInstructor:instructor} = course;
//extracting the value of courseInstructor from the course object using destructuring assignment
console.log(instructor); // This will log 'Rishav'


    // const navbar=()=>{

    // }
    // navbar(company="hitesh") // This will call the navbar function with the default value of company as "hitesh"
    // //this is react 


    // {
    //    "" name":"rishav"
    //     "course":"javascript"
    //     "price":"free"
    // }

    // kuch bhi ho skta hai api object array etc;


     
