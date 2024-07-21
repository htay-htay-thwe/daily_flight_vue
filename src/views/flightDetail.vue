<template>
  <div>
    <div class="p-2 shadow-sm container-fluid second-navbar">
      <div class="flight-search">
        <div class="d-flex">
          <div class="dropdown one">
            <div class="input-group input-group-lg">
              <span class="input-group-text" id="inputGroup-sizing-lg"><i
                  class="fa-solid fa-magnifying-glass"></i></span>
              <input v-model="origin" class="dropdown-toggle form-control custom-rounded" type="text"
                data-bs-toggle="dropdown" aria-expanded="false" placeholder="Flying from"
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
          <p @click="swapElements()" class="flight-search-change" style="margin-left: -10px; margin-right: -10px">
            <img src="../book/exchange-svgrepo-com.png" style="max-width: 20px" />
          </p>
          <div class="mb-4 dropdown one">
            <div class="input-group input-group-lg">
              <span class="input-group-text" id="inputGroup-sizing-lg"><i
                  class="fa-solid fa-magnifying-glass"></i></span>
              <input v-model="destination" class="rounded-start dropdown-toggle form-control" type="text"
                data-bs-toggle="dropdown" aria-expanded="false" placeholder="Flying from"
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
        </div>

        <div class="mb-4 input-group input-group-sm two">
          <span class="input-group-text" id="inputGroup-sizing-lg"><i class="fa-solid fa-calendar-days"></i></span>
          <input v-model="departureDate" id="datepicker" class="col-3 dropdown-toggle form-control input-group-lg"
            type="text" data-bs-toggle="dropdown" aria-expanded="false" placeholder="Select Date" />
        </div>
        <div @click="newSearch()" class="mb-3 search-btn">Search</div>
      </div>
    </div>
    <div class="container">
      <div class="mt-4">
        <div class="row">
          <!-- <div class="col-3">
            <div class="mt-5filter">
              <div class="side-card">
                <h5>Airlines</h5>
                <p style="color: rgb(102, 102, 102)">Select All airlines</p>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" />
                  <label class="form-check-label" for="exampleRadios1">
                    Thai Asia
                  </label>
                </div>
                <hr />

                <h5 class="mt-3">Stops</h5>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios1" />
                  <label class="form-check-label" for="defaultCheck1">
                    Direct
                  </label>
                </div>
                <hr />
                <div class="d-flex justify-content-between flight-choice">
                  <h5 class="mt-3">Times</h5>
                  <p class="mt-3">Clear</p>
                </div>
                <div>
                  <label for="customRange3" class="form-label" style="color: rgb(93, 92, 92)">
                    Departure 00:00 - 24:00</label>
                  <br />
                  <input type="range" class="" min="1" max="24" step="1" />
                  <div style="display: flex; color: grey" class="m-0 justify-content-between w-50">
                    <small>00:00</small>
                    <small>24:00</small>
                  </div>
                </div>

                <div>
                  <label for="customRange3" class="mt-3 form-label" style="color: rgb(93, 92, 92)">
                    Arrival 6:00 - 16:00</label>
                  <br />
                  <input type="range" class="" min="0" max="23" step="1" />
                  <div style="display: flex; color: grey" class="m-0 justify-content-between w-50">
                    <small>00:00</small>
                    <small>24:00</small>
                  </div>
                </div>
                <hr />

                <div class="d-flex justify-content-between">
                  <h5 class="mt-3">Price Per person</h5>
                  <p class="mt-3">Clear</p>
                </div>
                <div>
                  <label for="customRange3" class="form-label" style="color: rgb(93, 92, 92)">
                    Up to USD96</label>
                  <br />
                  <input type="range" class="" min="1" max="24" step="1" />
                  <div style="display: flex; color: grey" class="m-0 justify-content-between w-50">
                    <small>00:00</small>
                    <small>24:00</small>
                  </div>
                </div>
                <hr />

                <div class="d-flex justify-content-between">
                  <h5 class="mt-3">Duration</h5>
                  <p class="mt-3">Clear</p>
                </div>
                <div>
                  <label for="customRange3" class="form-label" style="color: rgb(93, 92, 92)">
                    Under 72 hours</label>
                  <br />
                  <input type="range" class="" min="1" max="24" step="1" />
                  <div style="display: flex; color: grey" class="m-0 justify-content-between w-50">
                    <small>00:00</small>
                    <small>24:00</small>
                  </div>
                </div>
                <hr />

                <div class="d-flex justify-content-between">
                  <h5 class="mt-3">Flight Number</h5>
                  <small class="mt-3"><i class="fa-solid fa-circle-exclamation"></i></small>
                </div>
                <div class="mb-3 form-floating">
                  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label for="floatingInput"><i class="fa-solid fa-magnifying-glass"></i> Search</label>
                </div>
              </div>
            
            </div>
          </div> -->
        
          <div class="col">
            <!-- <swiper :slidesPerView="5" :loop="true" :spaceBetween="30" :modules="modules" class="mySwiper date-grid">
                            <swiper-slide>
                                <div class="date">
                                    <small>11 Jul</small>
                                    <p>From B 1,381</p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="date">
                                    <small>11 Jul</small>
                                    <p>From B 1,381</p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="date">
                                    <small>11 Jul</small>
                                    <p>From B 1,381</p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="date">
                                    <small>11 Jul</small>
                                    <p>From B 1,381</p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="date">
                                    <small>11 Jul</small>
                                    <p>From B 1,381</p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="date">
                                    <small>11 Jul</small>
                                    <p>From B 1,381</p>
                                </div>
                            </swiper-slide>
                        </swiper> -->
            <h4 class="text-center text-danger">Please Enter Airport Short Term!!</h4>
            <div class="date-title">
              <h5>Flights from {{ origin }} to {{ destination }}</h5>
              <small style="color: grey">
                Average price per person. The price includes taxes and fees.
              </small>
            </div>

            <!-- <div class="mt-4 choice">
              <div class="cheap">
                <h5>Cheapest</h5>
                <small>B 1352.1h 25m</small>
              </div>

              <div class="cheap">
                <h5>Cheapest</h5>
                <small>B 1352.1h 25m</small>
              </div>

              <div class="cheap">
                <h5>Cheapest</h5>
                <small>B 1352.1h 25m</small>
              </div>

              <div class="cheap">
                <h5>Cheapest</h5>
                <small>B 1352.1h 25m</small>
              </div>
            </div> -->
            <div class="mt-5 fw-bold">Total flight-search-change - {{ flightDetail.length }}</div>
            <div v-if="loadingStatus" class="mt-5 spinner-border text-secondary p-1" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div v-else class="mt-4 accordion accordion-flush" id="accordionFlushExample"
              v-for="(flight, segmentIndex) in  flightDetail" :key="segmentIndex">
              <div class="mt-3 accordion-item" v-for="(segment, index) in flight.outboundSlice.segments" :key="index">
                <div class="flight-detail accordion-header" :id="'segment-' + index + '-' + segmentIndex">
                  <div class="rounded d-flex flight-group accordion-button collapsed" type="button"
                    :data-bs-toggle="'collapse'" :data-bs-target="'#flush-collapse-' + index + '-' + segmentIndex"
                    aria-expanded="false" :aria-controls="'flush-collapse-' + index + '-' + segmentIndex">
                    <div class="gap-5 d-flex">
                      <div><img :src="segment.carrierContent.carrierIcon" style="max-width:50px;" /></div>
                      <div class="text-break">{{ segment.carrierContent.carrierName }}</div>
                    </div>

                    <div class="d-flex flight-time">
                      <div class="mt-2" style="line-height: 0.2rem">
                        <h5 class="fw-bold">{{ segment.departDateTime }}</h5>
                        <p class="place-name">{{ segment.originAirport }}</p>
                      </div>
                      <div class="mt-2" style="line-height: 0.1rem">
                        <p class="flight-direction">
                          <i class="fa-solid fa-arrow-right"></i>
                        </p>
                        <small>{{ duration }}</small>
                      </div>
                      <div class="mt-2" style="line-height: 0.2rem">
                        <h5 class="fw-bold">{{ segment.arrivalDateTime }}</h5>
                        <p class="place-name">{{ segment.destinationAirport }}</p>
                      </div>
                    </div>
                    <div>
                      <div class="mt-2 text-danger d-flex">
                        USD {{ flight.bundlePrice[0]?.price?.usd?.charges[0]?.total?.inc }}
                      </div>
                    </div>
                    <!-- <div v-for="(bundle, index) in bundlePriceArray" :key="index">
                      <div v-if="Array.isArray(bundle.price?.usd?.charges) && bundle.price.usd.charges.length > 0">
                        <div  class="mt-2 text-danger d-flex">
                          USD {{ bundle.price.usd.charges[0].total.inc }}
                        </div>
                      </div>
                    </div> -->
                  </div>
                </div>

                <div :id="'flush-collapse-' + index + '-' + segmentIndex" class="accordion-collapse collapse"
                  :aria-labelledby="'segment-' + index + '-' + segmentIndex"
                  :data-bs-parent="'#accordionFlushExample-' + index">
                  <div class="gap-3 mt-3 accordion-body d-flex">
                    <div>
                      <div style="line-height: 0.2rem">
                        <p class="fw-bold">{{ segment.departDateTime }}</p>
                        <small style="color: grey">{{ formattedDate }}</small>
                      </div>

                      <div class="mt-5 mb-5">{{ duration }}</div>

                      <div style="line-height: 0.2rem">
                        <p class="fw-bold">{{ segment.arrivalDateTime }}</p>
                        <small style="color: grey">{{ formattedDate }}</small>
                      </div>
                    </div>

                    <div>
                      <div class="star">
                        <img src="../book/star-sharp-svgrepo-com.svg" style="max-width: 11px" />
                      </div>
                      <div class="stick"></div>
                      <div class="circle">
                        <img src="../book/circle-svgrepo-com.svg" style="max-width: 10px" />
                      </div>
                    </div>

                    <div>
                      <div style="line-height: 1.1rem">
                        <div class="text-break">
                          <div class="fw-bold">{{ segment.airportContent.departureCityName
                            }}({{ segment.originAirport
                            }})</div>
                          <div><small>.{{ segment.airportContent.departureAirportName
                              }}</small></div>
                        </div>
                      </div>

                      <div class="" style="
                          line-height: 0.2rem;
                          margin-top: 70px;
                          margin-bottom: 0px;
                        ">
                        <p style="color: grey"><img :src="segment.carrierContent.carrierIcon"
                            style="max-width:35px;" />{{ segment.carrierContent.carrierName
                          }}</p>

                        <div style="line-height: 0.2rem">
                          <p class="fw-bold">{{ segment.airportContent.arrivalCityName }} ({{
                segment.destinationAirport
              }})</p>
                          <small class="text-break" style="color: grey">{{
                  segment.airportContent.arrivalAirportName
                }}</small>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex" style="margin-top:110px;margin-left:40px;">
                      <div> <button class="cart-btn">Add to Cart</button></div>
                      <div> <button class="select">Select</button></div>

                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'swiper/vue';
// import 'swiper/css';
import axios from 'axios'
import flatpickr from "flatpickr";
export default {
  name: 'flightDetail',
  // components: {
  //     Swiper,
  //     SwiperSlide,
  // },
  data() {
    return {
      dailyFlight: {},
      origin: '',
      destination: '',
      departureDate: '',
      flightDetail: [],
      arrivalTime: [],
      departTime: [],
      arrivalDateTime: '',
      duration: [],
      pricePer: '',
      bundlePriceArray: [],
      formattedDate: "",
      changeOrigin: "",
      changeDestination: "",
      changeDepartureDate: "",
      loadingStatus: false
    }
  },
  methods: {
    searchOneWay(origin, destination, departureDate) {
      this.loadingStatus = false;

      axios
        .get(`http://localhost:8000/api/get/flight/origin=${origin}/destination=${destination}/departureDate=${departureDate}`)
        .then((response) => {
          this.flightDetail = response.data.flight.data.bundles;
          const bundles = response.data?.flight?.data?.bundles;
          console.log(bundles);
          this.loadingStatus = true;
          if (Array.isArray(bundles) && bundles.length > 0) {
            for (let i = 0; i < bundles.length; i++) {
              const outboundSlice = bundles[i]?.outboundSlice;

              const segments = outboundSlice?.segments;

              this.bundlePriceArray = bundles[i]?.bundlePrice;

              if (Array.isArray(segments) && segments.length > 0) {
                for (let j = 0; j < segments.length; j++) {
                  const arrivalDateTime = segments[j]?.arrivalDateTime;
                  const departDateTime = segments[j]?.departDateTime;
                  const duration = segments[j]?.duration;
                  const hours = Math.floor(duration / 60);
                  const minutes = duration % 60;
                  const formattedHours = hours < 10 ? '' + hours : hours;
                  const formattedMinutes = minutes < 10 ? '' + minutes : minutes;

                  this.duration = `${formattedHours}h ${formattedMinutes}m`;

                  this.extractTime(arrivalDateTime, departDateTime);
                  segments[j].arrivalDateTime = this.arrivalTime;
                  segments[j].departDateTime = this.departTime;

                }

              }
            }
          }
          this.changeDateFormat()
        })
        .catch((error) => {
          console.error('There was an error!', error)
        })
    },

    extractTime(arrivalDateTime, departDateTime) {
      function formatDate(dateString) {
        const date = new Date(dateString);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const formattedHours = hours < 10 ? '' + hours : hours;
        const formattedMinutes = minutes < 10 ? '' + minutes : minutes;
        return `${formattedHours}:${formattedMinutes}`;
      }

      // Extract formatted times
      this.arrivalTime = formatDate(arrivalDateTime);
      this.departTime = formatDate(departDateTime);
    },
    changeDateFormat() {
      let date = new Date(this.departureDate);

      // Create an array of month names
      let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

      // Extract day and month
      let day = date.getDate();
      let month = monthNames[date.getMonth()];

      // Format the date
      this.formattedDate = `${day} ${month}`;
    },
    newSearch() {
      console.log('searching...');
      this.$router.push({
        name: 'flightDetail',
        query: {
          origin: this.origin,
          destination: this.destination,
          departureDate: this.departureDate
        }

      });

      this.searchOneWay(this.origin, this.destination, this.departureDate);
    },
    swapElements() {
      const temp = this.origin;
      this.origin = this.destination;
      this.destination = temp;
    }
  },
  mounted() {
    this.origin = this.$route.query.origin;
    this.destination = this.$route.query.destination;
    this.departureDate = this.$route.query.departureDate;
    this.searchOneWay(this.origin, this.destination, this.departureDate);
    this.loadingStatus=false;
    this.changeDateFormat();
    flatpickr("#datepicker", {
      enableTime: false,
      dateFormat: "Y-m-d",
    });
  }

}

</script>

<style lang="stylus" scoped>
body {
    max-width: 100%;
    background-color: #f6f7fb;
  }
  .custom-rounded {
    border-radius: 0.25rem; /* Adjust the border-radius as needed */
  }
  .flight-choice p {
    color: #5881e7;
    font-weight: 600;
  }
  .flight-choice p:hover {
    text-decoration: underline;
    font-weight: 600;
  }
  .flight-search {
    display: flex;
    gap: 1rem;
    z-index: -1;
  }
  .flight-search input {
    background-color: #eff2fa;
  }
  .flight-search-change {
    background-color: white;
    padding: 3px 6px;
    border: 1px solid rgb(198, 196, 196);
    margin-bottom: 34px;
    border-radius: 50%;
    z-index: 10;
    margin-top: 3px;
    box-shadow: 1px 1px 1px 1px grey;
  }
  .flight-search .input-group-text {
    background-color: #eff2fa;
  }
  .flight-search .input-group:hover {
    background-color: #3d5db3;
    border-radius: 5px 5px;
  }
  .two {
    max-width: 270px;
  }
  .flight-search .search-btn {
    padding: 13px 26px;
    border-radius: 30px 30px;
    background-color: #5684f8;
    max-width: 200px;
    font-size: 17px;
    font-weight: 500;
    color: white;
  }
  .date {
    background-color: white;
    border: 1px solid rgb(198, 196, 196);
    border-radius: 20px 20px;
    max-width: 160px;
    text-align: center;
  }
  .date:hover {
    box-shadow: 6px 6px rgb(237, 236, 236);
  }

  .date-title {
    margin-top: 20px;
    line-height: 0.1rem;
  }
  .cheap {
    background-color: white;
    padding: 10px 10px;
    border: 1px solid rgb(198, 196, 196);
    border-radius: 5px 5px;
    min-width: 180px;
    text-align: center;
  }
  .cheap:hover {
    border: 1px solid blue;
    background-color: #F6F8FC;
    color: #5680ea;
  }
  .choice {
    display: flex;
  }
  .flight-group {
    display: flex;
    gap: 4rem;
    border: 1px solid rgb(149, 148, 148);
  }
  .flight-time {
    gap: 3rem;
  }
  .flight-direction {
    font-size: 20px;
  }
  .stick {
    height: 120px;
    border: 1px solid grey;
    margin-left: 4px;
    max-width: 2px;
    background-color: grey;
  }
  .circle {
    margin-top: -5px;
  }
  .second-navbar {
    background-color: white;
  }
  .place-name {
    color: grey;
  }
  .cart-btn {
    padding: 7px 17px;
    background-color: #eff2fa;
    border-radius: 30px 30px;
    border: 1px solid rgb(209, 208, 208);
    color: #5684f8;
    font-weight: bold;
  }
  .select {
    padding: 7px 17px;
    background-color: #eff2fa;
    border-radius: 30px 30px;
    border: 1px solid rgb(190, 189, 189);
    background: #507cf4;
    color: white;
    font-weight: bold;
  }
</style>
