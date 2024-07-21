<template>
  <div>
    <div class="search-form"></div>

    <!-- start of intro and form -->
    <div class="form-flight" style="margin-bottom: 100px">
      <!-- name and intro -->
      <h1 class="mt-4 text-center">Hi, HTAYHTAY!</h1>
      <h3 class="mb-2 text-center">
        Pay less with Agoda so you can spend more on yourself
      </h3>
      <!-- end of name and intro -->

      <!-- start of second navbar -->
      <div class="container options-card offset-3">
        <div class="d-flex justify-content-between" style="text-align: center">
          <div>Hotels</div>
          <div>Hotels</div>
          <div>Hotels</div>
          <div>Hotels</div>
          <div>Hotels</div>
          <div>Hotels</div>
        </div>
      </div>
      <!-- end of second navbar -->
      <!-- start of choosing directions -->
      <div class="change offset-6">
        <img src="../book/exchange-svgrepo-com.png" style="max-width: 25px" />
      </div>
      <div class="" style="margin-top: -20px; z-index: -1">
        <!-- start of direction form  -->
        <div class="container mt-5 shadow-lg card direction">
          <div class="row">
            <div class="mt-5 flight-type">
              <span>One Way</span>
              <span>Round Trip</span>
            </div>
            <div class="mt-4 col-6 flight">
              <div class="mb-4 dropdown">
                <div class="input-group input-group-lg">
                  <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
                  <input class="dropdown-toggle form-control" type="text" data-bs-toggle="dropdown"
                    aria-expanded="false" placeholder="Flying from" aria-describedby="inputGroup-sizing-lg"
                    aria-label="Sizing example input" v-model="origin" />
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                  </ul>
                </div>
              </div>

              <input v-model="departureDate" type="date" class="departure form-control" placeholder="Departure"
                style="margin-bottom: 40px" />
              <!-- flight departure -->
            </div>

            <div class="mt-4 col-6">
              <div class="mb-4 dropdown">
                <div class="input-group input-group-lg">
                  <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
                  <input class="dropdown-toggle form-control" type="text" data-bs-toggle="dropdown"
                    v-model="destination" ria-expanded="false" placeholder="Flying from"
                    aria-describedby="inputGroup-sizing-lg" aria-label="Sizing example input" />
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- <div class="mb-4 dropdown">
                <div class="input-group input-group-lg">
                  <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
                  <input class="p-2 dropdown-toggle form-control" type="text" data-bs-toggle="dropdown"
                    aria-expanded="false" placeholder="Flying from" aria-describedby="inputGroup-sizing-lg"
                    aria-label="Sizing example input" />
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                  </ul>
                </div>
              </div> -->
            </div>
          </div>
        </div>
        <!-- end of direction form -->
        <button @click="searchOneWay()" class="offset-3 text-white btn-search col-6 fs-4"
          style="margin-top: -50px; position: absolute">
          SEARCH FLIGHTS
        </button>
      </div>
    </div>
    <!-- end of intro and form -->

    <!-- start of comments -->
    <h3 class="mb-5" style="margin-top: 250px; text-align: center">
      Overheard from travelers
    </h3>
    <div class="mb-5 text-center grid-container">
      <div class="card-grid">
        <div class="p-4 card">
          <h4 class="hotel-name">Hotel Eucalyptus</h4>
          <p class="text-secondary">in Greece</p>
          <div>
            "I could not have asked for a better stay than Klausturhof. Thanks
            to Agoda."
          </div>
          <div class="mt-3">- Vishwas from India</div>
        </div>

        <div class="p-4 card">
          <h4 class="hotel-name">Hotel Eucalyptus</h4>
          <p class="text-secondary">in Greece</p>
          <div>
            "I could not have asked for a better stay than Klausturhof. Thanks
            to Agoda."
          </div>
          <div class="mt-3">- Vishwas from India</div>
        </div>

        <div class="p-4 card">
          <h4 class="hotel-name">Hotel Eucalyptus</h4>
          <p class="text-secondary">in Greece</p>
          <div>
            "I could not have asked for a better stay than Klausturhof. Thanks
            to Agoda."
          </div>
          <div class="mt-3">- Vishwas from India</div>
        </div>
      </div>
    </div>
    <!-- end of comments -->

    <!-- start of destinations -->
    <h3 class="mb-5 text-center">Popular destinations outside Myanmar</h3>
    <div class="mb-5 grid-container">
      <div class="places">
        <div class="destination card" style="width: 18rem">
          <img src="book/destination.jpeg" class="card-img-top" />
          <h5 class="mt-2 text-center">Kuala Lumper</h5>
          <p class="text-center">19,902 accommodations</p>
        </div>

        <div class="destination card" style="width: 18rem">
          <img src="book/destination.jpeg" class="card-img-top" />
          <h5 class="mt-2 text-center">Kuala Lumper</h5>
          <p class="text-center">19,902 accommodations</p>
        </div>

        <div class="destination card" style="width: 18rem">
          <img src="book/destination.jpeg" class="card-img-top" />
          <h5 class="mt-2 text-center">Kuala Lumper</h5>
          <p class="text-center">19,902 accommodations</p>
        </div>
      </div>
    </div>
    <!-- end of destinations -->
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'HomeView',
  data () {
    return {
      origin: '',
      destination: '',
      departureDate: '',
      D: {}
    }
  },
  methods: {
    searchOneWay() {
      let origin = this.origin;
      let destination = this.destination;
      let departureDate = this.departureDate;
      this.$router.push({
        name: 'flightDetail',
        query: {
          origin: origin,
          destination: destination,
          departureDate: departureDate
        }
      }); 
      axios
        .get(`http://localhost:8000/api/post/create/origin=${origin}/destination=${destination}/departureDate=${departureDate}`)
        .then(( response )=>{
          console.log(response.data.flight)
        })
        .catch((error) => {
          console.error('There was an error!', error)
        })
    }
  }
}
</script>
