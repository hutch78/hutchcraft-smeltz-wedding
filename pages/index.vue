<template>
  <main class="page-wrapper">
    
    <section
      class="hero-section py-10 px-4 text-center md:h-screen flex flex-col justify-center"
    >

      <img
        src="/img/xmas-tree-left.png"
        alt=""
        class="left-tree hidden lg:block"
      />
      <img
        src="/img/xmas-tree-right.png"
        alt=""
        class="right-tree hidden lg:block"
      />
      <h1 class="font-sans text-6xl font-black text-primary leading-tight mb-5 relative z-10">
        <small class="text-3xl md:text-3xl block text-gray-800 mb-5 font-normal"
          >Allison Smeltz and <br class="block lg:hidden" />Jeremy
          Hutchcraft</small
        >
        <span class="uppercase text-5xl lg:text-6xl">are Getting Married!</span>
      </h1>
      <p class="lg:text-3xl lg:max-w-4xl lg:mx-auto  relative z-10">
        in a <span class="text-primary font-bold">Christmas</span>-<span
          class="text-secondary font-bold"
          >themed</span
        >
        Wedding at the Hilton Ocala on December 5th, 2020 at 5:00 PM
      </p>
    </section>

    <section class="about-section py-10 px-5">
      <div class="container">
        <img
          class="block mb-10 lg:mb-40 lg:mx-auto lg:-mt-40 relative z-10"
          src="/img/al-and-jer.png"
          alt="Allison and Jeremy"
        />
        <h2 class="h2-style mb-4 text-primary lg:text-center lg:mb-10">
          Their Story
        </h2>
        <p>
          Allison and Jeremy were introduced 5 years ago by their best man and
          matron of honor (Miles & Krista Jeffrey) and fell in love at first
          sight. Jeremy and Allison had immediate chemistry, laughing together
          about nerdy things like Lord of the Rings, Game of Thrones, and cheesy
          reality TV shows, They knew they were onto something special. They
          spoke for hours every day on the phone and texted each other first
          thing in the morning.
        </p>
        <p class="lg:mb-20">
          They spent their first months together seeing each other on the
          weekends, but quickly realized that that wouldn’t be enough. After
          less than a year together, they received news that Olivia was on the
          way. They bought their first home in 2017. Today Allison, Jeremy, AJ
          and Olivia live in peaceful Ocala, FL with their dog Hank and their
          cat Lincoln. They were engaged in 2016 when Jeremy proposed to Allison
          on a cruise ship leaving St. Maarten.
        </p>
      </div>
    </section>

    <section class="details-section py-10 px-5">
      <div class="container">
        <div class="lg:flex lg:flex-row-reverse">
          <div class="content-col lg:w-1/2 lg:py-16 lg:pl-16">
            <h2 class="h2-style text-secondary mb-4 lg:mb-10">
              Wedding Details
            </h2>

            <!-- When -->
            <div class="details-row">
              <div class="flex pb-5">
                <h3 class="h3-style mb-0 w-24 lg:w-32 leading-tight">When</h3>
                <p class="h3-style leading-tight">December 5th, 5:00pm</p>
              </div>
            </div>

            <!-- Where -->
            <div class="details-row">
              <div class="flex pb-5">
                <h3
                  class="h3-style mb-4 w-24 lg:w-32 flex-shrink-0 leading-tight"
                >
                  Where
                </h3>
                <div class="">
                  <h4 class="h3-style">
                    <a
                      class="underline mb-4 block"
                      href="https://www.hilton.com/en/hotels/ocfohhf-hilton-ocala/"
                      target="_blank"
                      title="Hilton Ocala Website"
                      >Hilton Ocala</a
                    >
                  </h4>
                  <div class="flex mb-4">
                    <i
                      class="fas fa-map-marker-alt text-secondary inline-block"
                    ></i>
                    <address class="block ml-3 text-sm md:text-base not-italic">
                      3600 Southwest 36th Ave. <br />
                      Ocala, FL 34474, USA
                    </address>
                  </div>
                  <div class="flex mb-8">
                    <i class="fas fa-phone text-secondary inline-block"></i>
                    <address class="block ml-3 text-sm md:text-base not-italic">
                      1-352-854-1400
                    </address>
                  </div>
                  <a href="https://www.google.com/maps/dir//Hilton+Ocala,+3600+SW+36th+Ave,+Ocala,+FL+34474/@29.1487342,-82.1853908,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88e7d50f3302d53d:0xcf98371245bfe41!2m2!1d-82.1832021!2d29.1487342" class="block font-bold text-gray-800" target="_blank" title="Get directions to the Hilton hotel in Ocala, FL">
                    Get Directions
                    <i class="fas fa-chevron-right inline-block ml-3"></i>
                  </a>
                </div>
              </div>
            </div>

            <!-- Rooms -->
            <div class="details-row">
              <div class="flex">
                <h3 class="h3-style mb-4 w-24 lg:w-32 flex-shrink-0">Rooms</h3>
                <div class="">
                  <p>
                    We have reserved a block of rooms for a discounted rate at
                    the Hilton Ocala, where the wedding will be held. Please
                    contact Mary Hutchcraft at
                    <a
                      class="font-bold dont-break-out"
                      href="mailto:mhutchcraft@hiltonocala.com"
                      >mhutchcraft@hiltonocala.com</a
                    >
                    to book a reserve your room.
                  </p>
                </div>
              </div>
            </div>

            <!-- COVID -->
            <div class="details-row">
              <div class="flex">
                <h3 class="h3-style mb-4 w-24 lg:w-32 flex-shrink-0">COVID</h3>
                <div class="">
                  <p class="mb-4">
                    We will be taking safety precautions at this event to make
                    sure that no one arrives or leaves sick. This includes, but
                    is not limited to:
                  </p>
                  <ul class="pl-5 list-disc">
                    <li class="mb-4 leading-loose">
                      Temperature checks will be conducted upon your arrival at
                      the ceremony site.
                    </li>
                    <li class="mb-4 leading-loose">
                      Seating at both the ceremony and dinner will be arranged
                      in family groups
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="images-col flex-shrink-0 lg:w-1/2 lg:-mt-32">
            <img src="/img/wedding2.png" alt="Outdoor wedding venue" class="block mx-auto" />
            <p class="text-center py-3 mb-4 text-xs">
              Outdoor area where the ceremony will be held at Hilton Ocala
            </p>
            <img src="/img/wedding.png" alt="Wedding reception in a ballroom" class="block mx-auto" />
            <p class="text-center py-3 mb-4 text-xs">
              Our reception will be held in the Saratoga Ballroom.
            </p>
            <img src="/img/wedding3.png" alt="King suite bedroom" class="block mx-auto" />
            <p class="text-center py-3 mb-4 text-xs">
              King Suite room at the Hilton
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="rsvp-section">
      <h2
          class="text-6xl font-black leading-tight tracking-tighter text-center"
        >
          PLEASE RSVP
          <span class="text-3xl block tracking-tight"
            >by <span class="highlight-secondary">November 28</span></span
          >
        </h2>

        <div class="red-band">
          <div
            class="red-band__inner bg-primary p-10 rounded-xl my-10 lg:my-20"
          >
            <p class="text-white text-lg font-bold">
              “We know this is really short notice, and close to the holidays.
              We would be blessed to have you join us, but understand that COVID
              and the short notice make this a tough ask! Please let us know
              either way so that we can plan accordingly.“<span
                class="lg:block lg:text-right lg:mt-6 font-normal italic"
                >- Allison and Jeremy</span
              >
            </p>
          </div>
        </div>

        <div class="px-10">
          <client-only>
            <!-- <form @submit.prevent="onSubmit" name="rsvpForm"> -->
            <form netlify method="post" action="/thank-you" name="rsvpForm">
              <input type="hidden" name="form-name" value="rsvpForm" />
              <div class="form-row">
                <label class="block mb-6 md:mb-0" for="rsvp-first-name">
                  <span class="label-text" :class="{ 'text-salmon-800': $v.form.firstName.$dirty && $v.form.firstName.$error }">First Name</span>
                  <input
                    type="text"
                    id="rsvp-first-name"
                    name="first_name"
                    v-model="form.firstName"
                    @blur="$v.form.firstName.$touch()"
                    class="form-control"
                    :class="{
                      'er': $v.form.firstName.$dirty && $v.form.firstName.$error
                    }"
                  />
                  <small class="bg-salmon-500 text-white mt-2 py-3 px-4 text-base rounded-md" :class="$v.form.firstName.$dirty && $v.form.firstName.$error ? 'block' : 'hidden'">
                    Please enter your First Name so we know who you are
                  </small>
                </label>
                <label class="block mb-6 md:mb-0" for="rsvp-last-name">
                  <span class="label-text" :class="{ 'text-salmon-800': $v.form.lastName.$dirty && $v.form.lastName.$error }">Last Name</span>
                  <input
                    type="text"
                    id="rsvp-last-name"
                    name="last_name"
                    v-model="form.lastName"
                    class="form-control"
                    @blur="$v.form.lastName.$touch()"
                    :class="{
                      'er': $v.form.lastName.$dirty && $v.form.lastName.$error
                    }"
                  />
                  <small class="bg-salmon-500 text-white mt-2 py-3 px-4 text-base rounded-md" :class="$v.form.lastName.$dirty && $v.form.lastName.$error ? 'block' : 'hidden'">
                    Please enter your Last Name so we know who you are
                  </small>
                </label>
              </div>

              <div
                class="form-row form-row--single-col border border-secondary-200 p-6 rounded-xl  mb-6 lg:mb-0"
              >
                <p class="label-text mb-0">Will you be attending?</p>
                <div class="flex">
                  <label for="rsvp-yes" class="inline-block mr-8">
                    <input
                      type="radio"
                      id="rsvp-yes"
                      name="rsvp"
                      v-model="form.rsvp"
                      value="yes"
                    />
                    <span class="inline-block ml-2">Yes</span>
                  </label>
                  <label for="rsvp-no" class="inline-block">
                    <input
                      type="radio"
                      id="rsvp-no"
                      name="rsvp"
                      v-model="form.rsvp"
                      value="no"
                    />
                    <span class="inline-block ml-2">No</span>
                  </label>
                </div>
              </div>

              <template v-if="form.rsvp == 'yes'">
                <div class="form-row">
                  <label class="block mb-6 md:mb-0" for="rsvp-email">
                    <span class="label-text">Email</span>
                    <input
                      type="email"
                      id="rsvp-email"
                      name="email"
                      v-model="form.email"
                      class="form-control"
                    />
                  </label>
                  <label class="block mb-6 md:mb-0" for="rsvp-phone">
                    <span class="label-text">Phone</span>
                    <input
                      type="text"
                      id="rsvp-phone"
                      name="phone"
                      v-model="form.phone"
                      class="form-control"
                    />
                  </label>
                </div>
                <div class="form-row">
                  <label class="block mb-6 md:mb-0" for="rsvp-guests">
                    <span class="label-text">Number of guests</span>
                    <input
                      type="number"
                      name="num_guests"
                      id="rsvp-guests"
                      v-model="form.numGuests"
                      class="form-control"
                    />
                  </label>
                  <label class="block mb-6 md:mb-0" for="rsvp-what-ages">
                    <span class="label-text">What ages are your kids?</span>
                    <input
                      type="text"
                      id="rsvp-what-ages"
                      name="ages_kids"
                      v-model="form.agesKids"
                      class="form-control"
                    />
                  </label>
                </div>
                <div class="form-row form-row--single-col">
                  <label class="block mb-6 md:mb-0" for="rsvp-diet">
                    <span class="label-text"
                      >Do you have any dietary restrictions?</span
                    >
                    <input
                      type="text"
                      id="rsvp-diet"
                      name="dietary_restrictions"
                      v-model="form.dietaryRestrictions"
                      class="form-control"
                    />
                  </label>
                </div>
              </template>

              <div class="form-row form-row--single-col">
                <label class="block mb-6 md:mb-0" for="rsvp-message">
                  <span class="label-text"
                    >Share a message with Allison and Jeremy?</span
                  >
                  <textarea
                    type="text"
                    id="rsvp-message"
                    class="form-control"
                    name="message"
                    v-model="form.message"
                    rows="4"
                  ></textarea>
                </label>
              </div>

              <button
                class="block bg-salmon text-center text-white font-bold text-xl uppercase w-full py-10 rounded-xl"
                type="submit"
                :class="{ 'disabled': $v.form.$anyError }"
                :disabled="$v.form.$anyError"
              >
                Submit RSVP
              </button>
            </form>
          </client-only>
        </div>
    </section>

    <section class="thank-you px-5 py-20 text-center">
      <h2 class="font-black tracking-tighter text-4xl">
        Thank You for Stopping By!
      </h2>
      <p class="text-xl">-Allison and Jeremy</p>
    </section>


    <img
        class="snowflake snowflake-1 w-2 lg:w-6"
        src="/img/snowflake.svg"
        alt="snowflake icon"
      />
      <img
        class="snowflake snowflake-2 w-4 lg:w-4"
        src="/img/snowflake.svg"
        alt="snowflake icon"
      />
      <img
        class="snowflake snowflake-3 w-2 lg:w-8"
        src="/img/snowflake.svg"
        alt="snowflake icon"
      />
      <img
        class="snowflake snowflake-4 w-4 lg:w-2"
        src="/img/snowflake.svg"
        alt="snowflake icon"
      />
      <img
        class="snowflake snowflake-5 w-2 lg:w-10"
        src="/img/snowflake.svg"
        alt="snowflake icon"
      />
      <img
        class="snowflake snowflake-6 w-4 lg:w-4"
        src="/img/snowflake.svg"
        alt="snowflake icon"
      />
      <img
        class="snowflake snowflake-7 w-2 lg:w-2"
        src="/img/snowflake.svg"
        alt="snowflake icon"
      />
      <img
        class="snowflake snowflake-8 w-4 lg:w-6"
        src="/img/snowflake.svg"
        alt="snowflake icon"
      />
      <img
        class="snowflake snowflake-9 w-2 lg:w-4"
        src="/img/snowflake.svg"
        alt="snowflake icon"
      />
      <img
        class="snowflake snowflake-10 w-4 lg:w-4"
        src="/img/snowflake.svg"
        alt="snowflake icon"
      />
    
  </main>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength } from 'vuelidate/lib/validators';
import { handleSubmit } from '../assets/js/services/form'

export default {
  mixins: [validationMixin],

  validations: {
    form: {
      firstName: { required },
      lastName: { required }
    }
  },
  
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        rsvp: 'yes',
        email: '',
        phone: '',
        numGuests: '',
        agesKids: '',
        dietaryRestrictions: '',
        message: '',
      },
    }
  },

  methods: {
    onSubmit(event) {
      console.log('')
      console.log('on submit')
      console.log('')
      handleSubmit(event, this.form)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.warn(err)
        })
    },
  },
}
</script>

<style lang="scss">
* {
  -webkit-font-smoothing: antialiased;
}

button.disabled {
  @apply bg-gray-400 text-gray-800;
}

.page-wrapper {
  overflow: hidden;
}

.h2-style {
  @apply text-2xl font-medium leading-tight;
  @media (min-width: theme('screens.lg')) {
    @apply text-4xl;
  }
}

.h3-style {
  @apply text-lg;
  @media (min-width: theme('screens.lg')) {
    @apply text-xl;
  }
}

p {
  @apply leading-loose;
  & + p {
    @apply mt-5;
    @media (min-width: theme('screens.lg')) {
      @apply mt-10;
    }
  }
}

@-webkit-keyframes snowflake{
    0%   { opacity: 0; transform: translate3d(0, 10vh, 0) rotate(0deg); }
    12%  { opacity: 1; }
    25%  { opacity: 0; transform: translate3d(0, 25vh, 0) rotate(180deg); }
    37%  { opacity: 1; }
    50%  { opacity: 0; transform: translate3d(0, 50vh, 0) rotate(360deg); }
    62%  { opacity: 1; }
    75%  { opacity: 0; transform: translate3d(0, 75vh, 0) rotate(180def); }
    87%  { opacity: 1; }
    100% { opacity: 0; transform: translate3d(0, 100vh, 0) rotate(0deg); }
}

.dont-break-out {
  /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;
  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  hyphens: auto;
}

.highlight-secondary {
  border: none;
  border-bottom: 1px solid #a3c1ab;
  box-shadow: inset 0px -13px 0 0px #a3c1ab;
  overflow-wrap: break-word;
  word-break: break-word;
  word-wrap: break-word;
  transition: all 0.2s ease-in;
  @apply pb-0 px-2;
}

.red-band {
  position: relative;
  @apply px-5;

  &:after {
    content: '';
    display: block;
    background-color: #e94033;
    position: absolute;
    z-index: 4;
    width: 100%;
    height: 50%;
    left: 0;
    top: 50%;
    transform: translate3d(0, -50%, 0);
  }

  &__inner {
    position: relative;
    z-index: 5;
    @apply max-w-xl mx-auto;
    @media (min-width: theme('screens.lg')) {
      @apply max-w-4xl;
    }
  }
}

body {
  @apply font-sans;
}

.container {
  max-width: 86.25rem;
  margin: 0 auto;
}

.left-tree,
.right-tree {
  position: absolute;
  bottom: 0;
}

.left-tree {
  @media (min-width: theme('screens.lg')) {
    left: -140px;
  }
  @media (min-width: theme('screens.xl')) {
    left: 3vw;
  }
}

.right-tree {
  @media (min-width: theme('screens.lg')) {
    right: -140px;
  }
  @media (min-width: theme('screens.xl')) {
    right: 3vw;
  }
}

.form-control {
  @apply border border-secondary-100 p-4 text-secondary w-full rounded;
  &.er {
    @apply border-salmon-500 text-salmon-800;
  }
}

.label-text {
  @apply text-base block mb-2;
  @media (min-width: theme('screens.lg')) {
    @apply text-lg;
  }
}

.form-row {
  @apply grid-cols-2 gap-8;
  @media (min-width: theme('screens.sm')) {
    @apply grid mb-6;
  }
  &--single-col {
    @apply grid-cols-1 gap-0;
  }
}

.hero-section {
  position: relative;
}

.snowflake {
  opacity: 0;
  position: fixed;
  pointer-events: none;
  display: block;
  z-index: 5;
  animation: snowflake 10s 1;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite; 

}

.snowflake-1 {
  top: 25%;
  left: 7.5%;
  animation-delay:1.23s;
  animation-duration: 7s;
}

.snowflake-2 {
  top: 10%;
  left: 7rem;
  animation-delay:.5s;
  animation-duration: 8s;
}

.snowflake-3 {
  top: 25%;
  right: 5rem;
  animation-delay:2.3s;
  animation-duration: 8.5s;
}

.snowflake-4 {
  top: 5rem;
  right: 3rem;
  animation-delay:.5s;
  animation-duration: 10.5s;
}

.snowflake-5 {
  top: 5rem;
  right: 50%;
  animation-delay:1.5s;
  animation-duration: 9.5s;
}

.snowflake-6 {
  top: 10%;
  right: 4rem;
  animation-delay:.1s;
  animation-duration: 5s;
}

.snowflake-7 {
  top: 12rem;
  left: 23%;
  animation-delay:2.256s;
  animation-duration: 6.5s;
}

.snowflake-8 {
  top: 8rem;
  right: 30%;
  animation-delay:.8s;
  animation-duration: 9s;
}

.snowflake-9 {
  top: 35%;
  left: 30%;
  animation-delay:.875s;
  animation-duration: 7.5s;
}

.snowflake-10 {
  top: 4rem;
  left: 30%;
  animation-delay:.3s;
}

.about-section {
  background-color: #f5f2f3;
  @media (min-width: theme('screens.lg')) {
    @apply pb-40;
  }
}

.about-section,
.details-section {
  > .container {
    @apply max-w-xl mx-auto;
    @media (min-width: theme('screens.lg')) {
      @apply max-w-3xl;
    }
  }
}

.details-section {
  > .container {
    @media (min-width: theme('screens.lg')) {
      @apply max-w-5xl;
    }
  }
}

.rsvp-section {
  form {
    @apply max-w-xl mx-auto;
  }
}

.details-row {
  @apply border-t-2 border-gray-200 py-4;
  @media (min-width: theme('screens.lg')) {
    @apply py-8;
  }
}
</style>
