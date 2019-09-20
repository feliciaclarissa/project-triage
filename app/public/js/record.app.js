var patientRecordApp = new Vue({
  el: '#patientRecordApp',
  data: {           //*variable that we use
    patients: [],
    formPatient ={
      firstName: '',
      lastName:'',
      dob:'',
      sexAtBirth:'',
    }
},
  methods: {
  fetchPatients () {         /*assign function to varialbe*/
    fetch('dummy.php')
    .then(response => response.json())
    .then(json => {patientRecordApp.patients = json})

},
handleCreateRecord(event){
  this.patients.push(this.formPatient);
  this.formPatient ={
    firstName: '',
    lastName:'',
    dob:'',
    sexAtBirth:'',
}
},
handleRecordClick(patient){
  console.log(patient);
}
},
created() {                 //*define code
  this.fetchPatients();
}

});
