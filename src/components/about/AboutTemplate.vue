<template>
  <v-container fluid no-gutters class="pa-0 height100">
    <div
      class="black-screen"
      @click="closeWindow"
      v-show="menuShow || searchBarShow"
      v-bind:class="{ 'open-menu': menuShow, 'open-search': searchBarShow }"
    ></div>
    <SearchBar />
    <Menu />
    <div
      no-gutters
      class="page-content"
      v-bind:class="{ 'open-menu': menuShow, 'open-search': searchBarShow }"
    >
      <AboutBanner
        :aboutDescription="aboutBanner.aboutDescription"
        :aboutTitle="aboutBanner.aboutTitle"
        :aboutBannerImage="aboutBanner.aboutBannerImage"
      />
      <div class="about-content">
        <div class="about-content-title">Choose your own adventure</div>
        <div class="content-block1 content-block">
          <v-row class="block-full-width" v-scrollanimation>
            <v-col cols="12" md="12">
              <div class="block-full-width-title">
                {{ contentBlock1.blockTitle }}
              </div>
              <p class="block-full-width-p">{{ contentBlock1.desc }}</p>
              <router-link :to="'/fashion-mode'" class="block-sub-label">
                {{ contentBlock1.blockLink }}
              </router-link>
            </v-col>
          </v-row>
          <v-row class="block-full-width" v-scrollanimation>
            <v-col cols="12" md="12" class="uneven-image-list">
              <ul>
                <li
                  data-aos="zoom-in-up"
                  v-for="(item, index) in contentBlock1.imageList"
                >
                  <img
                    data-cursor-hover
                    :style="{ backgroundImage: `url(${item.img})` }"
                  />
                </li>
              </ul>
            </v-col>
          </v-row>
        </div>
        <div class="content-block2 content-block">
          <v-row class="block-full-width">
            <v-col cols="12" md="12" class="uneven-image-list">
              <ul>
                <li
                  data-aos="zoom-in-up"
                  v-for="(item, key, index) in contentBlock2.content"
                  :key="key"
                >
                  <div class="cat-title" v-if="item.blockTitle">
                    {{ item.blockTitle }}
                  </div>
                  <div class="cat-desc" v-if="item.desc">
                    {{ item.desc }}
                  </div>
                  <div class="cat-link" v-if="item.link">
                    <router-link :to="'/travel-miles'">
                      {{ item.link }}
                    </router-link>
                  </div>
                  <img
                    v-if="item.img"
                    data-cursor-hover
                    :style="{ backgroundImage: `url(${item.img})` }"
                  />
                </li>
              </ul>
            </v-col>
          </v-row>
        </div>
        <div class="content-block3 content-block">
          <v-row class="block-full-width">
            <v-col cols="12" md="12">
              <div class="block-full-width-title">
                {{ contentBlock3.blockTitle }}
              </div>
              <p class="block-full-width-p">{{ contentBlock3.desc }}</p>
              <router-link :to="'/lifestyle-makers'" class="block-sub-label">
                {{ contentBlock3.blockLink }}
              </router-link>
            </v-col>
          </v-row>
          <v-row class="block-full-width">
            <v-col cols="12" md="12" class="even-image-list">
              <ul>
                <li
                  data-aos="zoom-in-up"
                  v-for="(item, index) in contentBlock3.imageList"
                >
                  <img
                    data-cursor-hover
                    :style="{ backgroundImage: `url(${item.img})` }"
                  />
                  <div class="image-title">{{ item.title }}</div>
                </li>
              </ul>
            </v-col>
          </v-row>
        </div>
        <div class="content-block4 content-block">
          <v-row class="block-full-width">
            <v-col cols="12" md="12" class="uneven-image-list">
              <ul>
                <li
                  data-aos="zoom-in-up"
                  v-for="(item, key, index) in contentBlock4.content"
                  :key="key"
                >
                  <div class="cat-title" v-if="item.blockTitle">
                    {{ item.blockTitle }}
                  </div>
                  <div class="cat-desc" v-if="item.desc">
                    {{ item.desc }}
                  </div>
                  <div class="cat-link" v-if="item.link">
                    <router-link :to="'/technology-and-machine'">
                      {{ item.link }}
                    </router-link>
                  </div>
                  <img
                    v-if="item.img"
                    data-cursor-hover
                    :style="{ backgroundImage: `url(${item.img})` }"
                  />
                </li>
              </ul>
            </v-col>
          </v-row>
        </div>
        <div class="content-contact content-block">
          <v-row class="block-full-width" v-scrollanimation>
            <v-col cols="12" md="12">
              <div class="block-full-width-title">
                Contact Me
              </div>
              <div class="subtitle">Let’s by play it by ear for now.</div>
              <p class="block-full-width-p">
                This site was loved and unloved; misunderstood; lost and
                recovered. Upon recovery, by accident, it was given a new soul
                by my daughter. How would you like to call it..
              </p>
              <div class="contact-video">
                <img :src="videoIcon" />
              </div>
              <div class="block-full-width-p">
                Based from the film, The Social Network, Mark Zuckerberg once
                said that, “Facebook is like fashion. It never ends.” I couldn’t
                agree more. I would say tech+fashion is infinite. Fashion is not
                cheap but combined with tech, it could be somehow configurable,
                affordable, sustainable and for all we know, scalable.
              </div>
              <div class="block-full-width-p">
                That Mood tab of thoughts, on events, of vibe, of taste is Mine.
                For other things la Mode for fashion, Miles for travel, Makers
                for Home and Lifestyle, Machine for tech, and Mart for shop 🙂
              </div>
              <div class="block-full-width-p">
                Me, currently doing AI at tech with flair without fail.
              </div>
              <div class="contact-form">
                <v-row justify="center">
                  <v-col cols="12" sm="12" md="12" lg="12">
                    <v-form ref="form">
                      <v-text-field
                        ref="name"
                        v-model="name"
                        :rules="[() => !!name || 'This field is required']"
                        :error-messages="errorMessages"
                        label="Name"
                        outlined
                        required
                      ></v-text-field>
                      <v-text-field
                        ref="email"
                        v-model="email"
                        outlined
                        label="email"
                        :error-messages="errorMessages"
                        placeholder=""
                        required
                        :rules="[emailRules.required, emailRules.validate]"
                      ></v-text-field>
                      <v-textarea
                        ref="message"
                        v-model="message"
                        outlined
                        :error-messages="errorMessages"
                        label="Comment or Message"
                        required
                        :rules="[() => !!message || 'This field is required']"
                      ></v-textarea>
                      <button type="button" class="submit-bt" @click="submit">
                        Submit
                      </button>
                    </v-form>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
    <Footer />
  </v-container>
</template>
<script>
import Vue from 'vue';
import Menu from '@/components/menu/AppMenu.vue';
import SearchBar from '@/components/search/AppSearchBar.vue';
import AboutBanner from './AboutBanner.vue';
import SocialMediaLogos from '@/components/socialMedia/socialMediaLogos.vue';
import BuyThis from '@/components/buyThis/BuyThis.vue';
import Tags from '@/components/tags/tags.vue';
import NextStory from '@/components/nextStory/nextStory.vue';
import Footer from '@/components/footer/AppFooter.vue';
import Tinybox from 'vue-tinybox';
import eventBus from '@/event_bus';
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';
export default {
  name: 'Template',
  components: {
    Menu,
    AboutBanner,
    SearchBar,
    SocialMediaLogos,
    Tinybox,
    BuyThis,
    Tags,
    Footer,
    NextStory,
  },
  data() {
    return {
      forceImages: true,
      menuShow: false,
      searchBarShow: false,
      menuLogo: require('@/assets/images/logo-black.svg'),
      videoIcon: require('@/assets/images/video-icon.png'),
      aboutBanner: {
        aboutTitle: 'About Outfittera',
        aboutDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec pulvinar lectus,' +
          'euismod efficitur urna. Vivamus fringilla metus sit amet nibh sollicitudin ullamcorper.' +
          'Praesent non ipsum ut velit finibus aliquam. Sed vitae dignissim ante, at sodales magna.' +
          'Vivamus auctor faucibus lectus, in maximus neque aliquam eget. Suspendisse vel tincidunt' +
          'neque. Cras convallis condimentum orci, a congue odio pretium non.',
        aboutBannerImage: require('@/assets/images/banner-image.png'),
      },
      contentBlock1: {
        blockTitle: 'Fashion',
        desc:
          'Lorem Tortor sapien quis justo nunc et sed. Lacus, magna tortor urna, mi.' +
          'quisque sed egestas magna nunc. Nibh pellentesque etiam felis cursus. Felis,' +
          'praesent molestie nulla tincidunt. Feugiat mattis aliquam gravida egestas. Quam' +
          'praesent molestie nulla tincidunt. ',
        blockLink: 'Find More',
        imageList: [
          {
            img: require('@/assets/images/fashion1.png'),
          },
          {
            img: require('@/assets/images/fashion2.png'),
          },
          {
            img: require('@/assets/images/fashion3.png'),
          },
          {
            img: require('@/assets/images/fashion4.png'),
          },
        ],
      },
      contentBlock2: {
        content: [
          {
            blockTitle: 'Travel',
            desc:
              'Lorem Tortor sapien quis justo nunc et sed. Lacus, magna tortor urna, mi.' +
              'quisque sed egestas magna nunc. Nibh pellentesque etiam felis cursus. Felis,' +
              'praesent molestie nulla tincidunt. Feugiat mattis aliquam gravida egestas. Quam' +
              'praesent molestie nulla tincidunt. ',
            link: 'Explore More',
          },
          {
            img: require('@/assets/images/travel1.png'),
            title: 'Volutpat mollis sem sit quam',
          },
          {
            img: require('@/assets/images/travel2.png'),
            title: 'Sit quis venenatis nec',
          },
          {
            img: require('@/assets/images/travel3.png'),
            title: 'Turpis ut sed nisl pellentesque',
          },
        ],
      },
      contentBlock3: {
        blockTitle: 'Lifestyle',
        desc:
          'Lorem Tortor sapien quis justo nunc et sed. Lacus, magna tortor urna, mi.' +
          'quisque sed egestas magna nunc. Nibh pellentesque etiam felis cursus. Felis,' +
          'praesent molestie nulla tincidunt. Feugiat mattis aliquam gravida egestas. Quam' +
          'praesent molestie nulla tincidunt. ',
        blockLink: 'Learn More',
        imageList: [
          {
            img: require('@/assets/images/lifestyle1.png'),
            title: 'Volutpat mollis sem sit quam',
          },
          {
            img: require('@/assets/images/lifestyle2.png'),
            title: 'Sit quis venenatis nec',
          },
          {
            img: require('@/assets/images/lifestyle3.png'),
            title: 'Turpis ut sed nisl pellentesque',
          },
        ],
      },
      contentBlock4: {
        content: [
          {
            img: require('@/assets/images/tech1.png'),
            title: 'Volutpat mollis sem sit quam',
          },
          {
            blockTitle: 'Technology',
            desc:
              'Lorem Tortor sapien quis justo nunc et sed. Lacus, magna tortor urna, mi.' +
              'quisque sed egestas magna nunc. Nibh pellentesque etiam felis cursus. Felis,' +
              'praesent molestie nulla tincidunt. Feugiat mattis aliquam gravida egestas. Quam' +
              'praesent molestie nulla tincidunt. ',
            link: 'Find More',
          },
          {
            img: require('@/assets/images/tech2.png'),
            title: 'Sit quis venenatis nec',
          },
          {
            img: require('@/assets/images/tech3.png'),
            title: 'Turpis ut sed nisl pellentesque',
          },
        ],
      },
      errorMessages: '',
      name: null,
      email: null,
      message: null,
      emailRules: {
        required: (value) => !!value || 'This field is required.',
        validate: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Invalid e-mail.';
        },
      },
      formHasErrors: false,
    };
  },
  mounted() {
    const vm = this;
    vm.eventPass();
  },
  methods: {
    eventPass() {
      let vm = this;
      eventBus.$on('menuOpen', (val) => {
        vm.menuShow = val;
      });
      eventBus.$on('isSearchBarOpen', (val) => {
        vm.searchBarShow = val;
      });
    },
    closeWindow() {
      let vm = this;
      eventBus.$emit('menuOpen', false);
      eventBus.$emit('isSearchBarOpen', false);
      vm.searchBarShow = false;
      vm.menuShow = false;
    },
    submit() {
      this.formHasErrors = false;
      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true;
        this.$refs[f].validate(true);
      });
      if (this.formHasErrors === false) {
        // Form Submit Function
      }
    },
  },
  computed: {
    form() {
      return {
        name: this.name,
        email: this.email,
        message: this.message,
      };
    },
  },

  watch: {
    name() {
      this.errorMessages = '';
    },
  },
};
</script>
<style lang="scss">
#cursor-fx {
  z-index: 999999px;
}
.page-content {
  position: relative;
  min-height: 600px;
  transition: 0.6s ease;
  left: 0;
  &.open-search {
    transition: 0.6s ease;
  }
  &.open-menu {
    transition: 0.6s ease;
    left: 300px;
  }
}
.about-template {
  font-family: 'Libre Baskerville', serif !important;
  .about-content {
    position: relative;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 50px;
    width: 90%;
    text-align: center;

    .about-content-title {
      text-transform: uppercase;
    }

    .main-image {
      margin: 0 0 30px;
    }
    .initial:first-child:first-letter {
      float: left;
      font-size: 75px;
      line-height: 60px;
      padding-top: 12px;
      padding-right: 12px;
      padding-left: 3px;
      font-family: 'Libre Baskerville', serif !important;
      font-weight: normal;
    }

    .content-block {
      margin: 50px 10px;
    }
    .content-block1 {
      .uneven-image-list {
        margin: 50px 0px 0px;
        ul {
          padding: 0;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          li {
            list-style: none;
            flex: 1;
            flex-basis: 22%;
            justify-content: space-between;
            height: 60vh;
            margin: 0 10px;

            img {
              width: 100%;
              height: 100%;
              background-size: cover;
            }

            &:first-child,
            &:last-child {
              overflow: hidden;
              flex-basis: 0%;
            }
          }
        }
      }
    }
    .content-block2,
    .content-block4 {
      margin: 80px 10px;
      ul {
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        li {
          list-style: none;
          flex: 1;
          display: flex;
          flex-basis: 40%;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          height: 80vh;
          flex-direction: column;
          margin: 20px 10px;
          text-align: center;

          &:nth-child(3),
          &:nth-child(4) {
            height: 60vh;
          }
          .cat-title {
            font-size: 65px;
            margin: 50px 10px;
            text-align: center;
            line-height: 40px;
            font-family: 'Libre Baskerville', serif !important;
            font-weight: bold;
          }
          .cat-desc {
            padding: 0 30px;
          }
          .cat-link {
            text-transform: uppercase;
            padding-bottom: 10px;
            font-weight: 700;
            padding: 12px 35px;
            clear: both;
            width: 250px;
            margin-top: 40px;
            position: relative;
            a {
              color: #53127c;
              text-decoration: none;
            }
            &:after {
              content: '';
              position: absolute;
              width: 200px;
              height: 2px;
              display: block;
              margin: 0 auto;
              right: 0;
              left: 0;
              bottom: 0px;
              background: #53127c;
              transition-delay: 0.3s;
              transition: width 0.5s ease;
              -webkit-transition: width 0.5s ease;
            }
            &:hover:after {
              width: 0;
              left: 1000;
              background: #53127c;
            }
            &:hover {
              transition: 0.2s;
              color: #53127c;
            }
          }
          img {
            width: 100%;
            height: 100%;
            background-size: cover;
          }
        }
      }
    }
    .content-block3 {
      .even-image-list {
        margin: 50px 0px 0;
        ul {
          padding: 0;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          li {
            list-style: none;
            flex: 1;
            flex-basis: 22%;
            justify-content: space-between;
            height: 60vh;
            margin: 0 10px;

            img {
              width: 100%;
              height: 100%;
              background-size: cover;
            }
            .image-title {
              padding: 10px;
              line-height: 24px;
              font-family: 'Libre Baskerville', serif !important;
            }
          }
        }
      }
    }
    .content-contact {
      .subtitle {
        margin: 20px;
        font-family: 'Libre Baskerville', serif !important;
        display: block;
      }
      .contact-field {
        padding: 0;
        margin: 0;
      }
      .contact-video {
        margin: 20px auto;
        width: 200px;
        img {
          width: 100%;
          display: block;
        }
      }
      .contact-form {
        max-width: 800px;
        margin: 0 auto;
      }
      .submit-bt {
        float: right;
        position: relative;
        width: 122px;
        height: 40px;
        box-sizing: border-box;
        transition: 0.6s ease;
        margin: 20px 0;
        outline: none;
        text-align: left;
        &:before {
          content: '';
          border: solid black;
          border-width: 0 3px 3px 0;
          display: inline-block;
          padding: 3px;
          position: absolute;
          right: 5px;
          top: 15px;
          transform: rotate(-45deg);
          -webkit-transform: rotate(-45deg);
          &:hover:before {
            background: #53127c;
          }
        }
        &:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 1px;
          display: block;
          margin-top: 5px;
          right: 0;
          background: #53127c;
          transition-delay: 0.3s;
          transition: width 0.5s ease;
          -webkit-transition: width 0.5s ease;
        }
        &:hover:after {
          width: 0;
          left: 1000;
          background: #53127c;
        }
        &:hover {
          transition: 0.2s;
          color: #53127c;
        }
      }
    }
  }
  .block-full-width {
    margin: 0 0 0;

    .block-full-width-title {
      font-size: 65px;
      margin: 0px 10px 50px;
      text-align: center;
      line-height: 40px;
      font-family: 'Libre Baskerville', serif !important;
      font-weight: bold;
    }

    .block-full-width-p {
      width: 70%;
      margin: 0 auto 40px;
      clear: both;
      text-align: center;
    }

    .block-sub-label {
      text-transform: uppercase;
      padding-bottom: 10px;
      font-weight: 700;
      padding: 12px 35px;
      clear: both;
      position: relative;
      color: #53127c;
      display: block;
      text-decoration: none;
      margin: 0 auto;
      max-width: 200px;

      &:after {
        content: '';
        position: absolute;
        width: 200px;
        height: 2px;
        display: block;
        margin: 0 auto;
        right: 0;
        left: 0;
        bottom: 0px;
        background: #53127c;
        transition-delay: 0.3s;
        transition: width 0.5s ease;
        -webkit-transition: width 0.5s ease;
      }
      &:hover:after {
        width: 0;
        left: 1000;
        background: #53127c;
      }
      &:hover {
        transition: 0.2s;
        color: #53127c;
      }
    }
  }
  .black-screen {
    position: fixed;
    width: 100%;
    height: 100%;
    display: block;
    z-index: 10;
    transition: 0.6s ease;
    &.open-menu {
      left: 300px;
      transition: 0.6s ease;
      background: rgba(0, 0, 0, 0.7);
    }
    &.open-search {
      top: 60px;
      transition: 0.6s ease;
      background: rgba(0, 0, 0, 0.7);
    }
  }
}
.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 0.8s ease-out;
}
.enter {
  opacity: 1;
  transform: translateY(0px);
}

@media screen and (max-width: 1200px) {
  // About
  .about-template {
    .about-content {
      width: 80% !important;

      .block-full-width-title {
        font-size: 36px;
      }
      .uneven-image-list {
        ul {
          li {
            .cat-title {
              font-size: 36px;
              margin: 20px;
            }
            .cat-desc {
              padding: 0 10px;
              height: 100px;
              font-size: 14px;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .cat-link {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 997px) {
  // About
  .about-template {
    .about-description {
      overflow: hidden;
      text-overflow: ellipsis;
      height: 200px;
    }
    .about-content {
      width: 80% !important;
      .content-block2,
      .content-block4 {
        margin: 0px 10px;
        ul {
          li {
            height: 100vh !important;
          }
        }
      }

      .uneven-image-list,
      .even-image-list {
        ul {
          li {
            flex-basis: 100% !important;
            margin: 8px 0 !important;
            height: 100vh !important;
            .image-title {
              display: none;
            }
          }
        }
      }
      .contact-video {
        width: 150px !important;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  // About
  .menu-social {
    display: none;
  }
  .about-template {
    .about-content {
      width: 90% !important;

      .block-full-width-p {
        width: 100%;
      }
      .content-block2,
      .content-block4 {
        margin: 0px 10px;
        ul {
          li {
            height: 90vh !important;
          }
        }
      }
      .uneven-image-list,
      .even-image-list {
        ul {
          li {
            flex-basis: 100% !important;
            margin: 8px 0 !important;
            height: 90vh !important;
            .image-title {
              display: none;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 480px) {
  // Article
  .about-template {
    .banner-desc {
      .about-description {
        height: 150px;
      }
    }
  }
}

@media screen and (max-width: 360px) {
  // Article
  .about-template {
    .banner-desc {
      .about-description {
        display: none;
      }
    }
  }
}
</style>
