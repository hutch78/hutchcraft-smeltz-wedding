<template>
  <main class="page-wrapper">
    <section
      class="hero-section py-10 px-4 text-center h-screen flex flex-col justify-center"
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
      <h1 class="font-sans text-6xl font-black text-primary leading-tight mb-5">
        <small class="text-3xl md:text-3xl block text-gray-800 mb-5 font-normal"
          >Allison Smeltz and <br class="block lg:hidden" />Jeremy
          Hutchcraft</small
        >
        <span class="uppercase text-6xl">are Getting Married!</span>
      </h1>
      <p class="lg:text-3xl lg:max-w-4xl lg:mx-auto">
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
          class="block mb-10 lg:mb-40 lg:mx-auto lg:-mt-40"
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
                  <a href="#" class="block font-bold text-gray-800">
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
            <img src="/img/wedding.png" alt="" class="block mx-auto" />
            <p class="text-center py-3 mb-4">
              (this is definitely our actual wedding, not a stock photo 😂)
            </p>
            <img src="/img/wedding2.png" alt="" class="block mx-auto" />
            <p class="text-center py-3 mb-4">
              (like this, but with way less people and socially distanced)
            </p>
            <img src="/img/wedding3.png" alt="" class="block mx-auto" />
            <p class="text-center py-3 mb-4">
              (OK, this is an actual photo of a King Suite at the Hilton)
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="rsvp-section">
      <div class="container">
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
            <form name="rsvp-form" action="/thank-you" netlify>
            <input type="hidden" name="form-name" value="rsvp-form" />
            <div class="form-row">
              <label class="block mb-6 md:mb-0" for="rsvp-first-name">
                <span class="label-text">First Name</span>
                <input
                  type="text"
                  id="rsvp-first-name"
                  name="first_name"
                  v-model="form.firstName"
                  class="form-control"
                />
              </label>
              <label class="block mb-6 md:mb-0" for="rsvp-last-name">
                <span class="label-text">Last Name</span>
                <input
                  type="text"
                  id="rsvp-last-name"
                  name="last_name"
                  v-model="form.lastName"
                  class="form-control"
                />
              </label>
            </div>

            <div
              class="form-row form-row--single-col border border-secondary-200 p-6 rounded-xl"
            >
              <p class="label-text mb-0">Will you be attending?</p>
              <div class="flex mb-6 lg:mb-0">
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
                    max="4"
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
            >
              Submit RSVP
            </button>
          </form>
          </client-only>
        </div>
      </div>
    </section>

    <section class="thank-you px-5 py-20 text-center">
      <h2 class="font-black tracking-tighter text-4xl">
        Thank You for Stopping By!
      </h2>
      <p class="text-xl">-Allison and Jeremy</p>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        rsvp: 'no',
        email: '',
        phone: '',
        numGuests: '',
        agesKids: '',
        dietaryRestrictions: '',
        message: '',
      },
    }
  },
}
</script>

<style lang="scss">

* {
  -webkit-font-smoothing: antialiased;
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
  left: 3vw;
}

.right-tree {
  right: 3vw;
}

.form-control {
  @apply border border-secondary-100 p-4 text-secondary w-full rounded;
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
