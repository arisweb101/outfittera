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
      <div class="preloader" v-if="loading"><img :src="preloader" /></div>
      <AboutBanner
        v-if="!loading"
        :aboutDescription="aboutBanner.aboutDescription"
        :aboutTitle="aboutBanner.aboutTitle"
        :aboutBannerImage="aboutBanner.aboutBannerImage"
      />
      <div class="about-content" v-if="!loading">
        <div class="about-content-title">Choose your own adventure</div>
        <div class="content-block1 content-block">
          <v-row class="block-full-width" v-scrollanimation>
            <v-col cols="12" md="12">
              <div class="block-full-width-title">
                {{ mode.title }}
              </div>
              <p class="block-full-width-p" v-html="mode.copy"></p>
              <router-link :to="'/' +mode.article_type_slug" class="block-sub-label">
                {{ mode.link_label }}
              </router-link>
            </v-col>
          </v-row>
          <v-row class="block-full-width" v-scrollanimation>
            <v-col cols="12" md="12" class="uneven-image-list">
              <ul>
                <li
                  data-aos="zoom-in-up"
                  v-for="(item, index) in mode.articles"
                  :key="index"
                >
                <router-link :to="'/' + item.article_type_slug + '/' + item.slug">
                  <v-img
                    data-cursor-hover
                    :src="item.images"
                    class="article-image"
                  />
                </router-link>

                </li>
              </ul>
            </v-col>
          </v-row>
        </div>
        <div class="content-block2 content-block">
          <v-row class="block-full-width">
            <v-col cols="12" md="12" class="uneven-image-list">
              <ul>
                <li data-aos="zoom-in-up">
                  <div class="cat-title" v-if="miles.title">
                    {{ miles.title }}
                  </div>

                  <div class="cat-desc" v-if="miles.copy" v-html="miles.copy"></div>
                  <div class="cat-link" v-if="miles.article_type_slug">
                    <router-link :to="'/' +miles.article_type_slug">
                      {{ miles.link_label }}
                    </router-link>
                  </div>
                </li>
                <li v-for="(img, index) in miles.articles">
                  <router-link :to="'/' + img.article_type_slug + '/' + img.slug" tag="img"
                      :key="index"
                      v-if="img.images"
                      data-cursor-hover
                      :style="{ backgroundImage: `url(${img.images})` }"
                    >
                  </router-link>
                </li>
              </ul>
            </v-col>
          </v-row>
        </div>
        <div class="content-block3 content-block">
          <v-row class="block-full-width">
            <v-col cols="12" md="12">
              <div class="block-full-width-title">
                {{ makers.title }}
              </div>
              <p class="block-full-width-p" v-html="makers.copy"></p>
              <router-link :to="'/' +makers.article_type_slug" class="block-sub-label">
                {{ makers.link_label }}
              </router-link>
            </v-col>
          </v-row>
          <v-row class="block-full-width">
            <v-col cols="12" md="12" class="even-image-list">
              <ul>
                <li
                  data-aos="zoom-in-up"
                  v-for="(item, index) in makers.articles"
                  :key="index"
                >
                  <router-link :to="'/' + item.article_type_slug + '/' + item.slug">
                    <img
                      data-cursor-hover
                      :style="{ backgroundImage: `url(${item.images})` }"
                    />
                    <div class="image-title">{{ item.title }}</div>
                  </router-link>
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
                  v-for="(img, index) in machine.articles"
                  v-if="index === 0"
                >
                  <img
                    :key="index"
                    v-if="img.images"
                    data-cursor-hover
                    :style="{ backgroundImage: `url(${img.images})` }"
                  />
                </li>
                <li data-aos="zoom-in-up">
                  <div class="cat-title" v-if="machine.title">
                    {{ machine.title }}
                  </div>
                  <div class="cat-desc" v-if="machine.copy" v-html="machine.copy"></div>
                  <div class="cat-link" v-if="machine.link_label">
                    <router-link :to="'/' +machine.article_type_slug">
                      {{ machine.link_label }}
                    </router-link>
                  </div>
                </li>
                <li
                  v-for="(img, index) in machine.articles"
                  v-if="index === 1"
                >
                  <router-link
                    :to="'/' + img.article_type_slug + '/' + img.slug" tag="img"
                    :key="index"
                    v-if="img.images"
                    data-cursor-hover
                    :style="{ backgroundImage: `url(${img.images})` }"
                  />
                  </router-link>

                </li>
                <li
                  v-for="(img, index) in machine.articles"
                  v-if="index === 2"
                >
                  <router-link
                    :to="'/' + img.article_type_slug + '/' + img.slug" tag="img"
                    :key="index"
                    v-if="img.images"
                    data-cursor-hover
                    :style="{ backgroundImage: `url(${img.images})` }"
                  >
                  </router-link>
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
              <div class="block-full-width-p" v-html="contactInfo.text1"></div>
              <div class="contact-video">
                <audio id="myAudio">
                  <source src="https://outfittera.com/wp-content/uploads/2019/06/Mexicali-6.mp3" type="audio/mpeg">
                </audio>
                <img :src="videoIcon" @click="playAudio()" />
              </div>
              <div class="block-full-width-p" v-html="contactInfo.text2"></div>
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
                        :rules="emailRules"
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

                      <button type="button" class="submit-bt" @click="submit" :disabled="sending">
                        {{ sending ? 'Sending' : 'Submit' }}
                      </button>
                    </v-form>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>

          <v-dialog v-model="successDialog.show" max-width="500px">
            <v-card>
              <v-card-title>
                <span class="headline">{{ successDialog.title }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    {{ successDialog.message }}
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="successDialog.show=false">Ok</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-snackbar
            v-model="snackbar"
            :top="true"
            :center="true"
            :color="'error'"
            :timeout="3000"
          >
            {{ snackbarText }}

            <!-- <v-btn
              color="pink"
              text
              v-bind="attrs"
              @click="snackbar = false"
            >
              Close
            </v-btn> -->
          </v-snackbar>

        </div>
      </div>
    </div>
    <Footer v-if="!loading" />
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
  metaInfo () {
    return {
      title: this.meta.title,
      meta: [
        { name: 'description', content: this.meta.description },
        { name: 'keywords', content: this.meta.keywords }
      ],
    }
  },
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
      meta: {
        title: '',
        description: '',
        keywords: ''
      },
      snackbar: false,
      snackbarText: '',
      successDialog: {
        show: false,
        title: '',
        message: ''
      },
      forceImages: true,
      menuShow: false,
      searchBarShow: false,
      menuLogo: require('@/assets/images/logo-black.svg'),
      videoIcon: require('@/assets/images/video-icon.png'),
      aboutBanner: {
        aboutTitle: 'About Outfittera',
        aboutDescription: '',
        aboutBannerImage: require('@/assets/images/about.jpg'),
      },
      mode: {},
      miles: {},
      makers: {},
      machine: {},
      response: {},
      contactInfo: {},
      loading: false,
      sending: false,
      preloader: require('@/assets/images/preloader.gif'),
      errorMessages: '',
      name: null,
      email: null,
      message: null,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      formHasErrors: false,
    };
  },
  mounted() {
    const vm = this;
    vm.eventPass();
    vm.getAbout();
  },
  methods: {
    playAudio (){
      let audio = document.getElementById("myAudio");
      audio.play();
    },
    getAbout() {
      const vm = this;
      vm.loading = true;
      this.articles = [];
      let url = '/about';
      this.$http.plain
        .get(url)
        .then((response) => {
          vm.response = response.data;
          vm.meta = response.data.meta;
          vm.aboutBanner.aboutDescription = vm.response.about_outfiterra;
          vm.mode = vm.response.mode
          vm.miles = vm.response.miles
          vm.makers = vm.response.makers
          vm.machine = vm.response.machine
          vm.contactInfo = {
            text1: vm.response.contact_me_one,
            text2: vm.response.contact_me_two,
          };
          vm.hoverEffect();
          vm.loading = false;
        })
        .catch((error) => {
          vm.loading = false;
          console.log(error.response);
        });
    },
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
      this.formHasErrors = this.$refs.form.validate();
      if (!this.formHasErrors === false) {
        let self = this
        this.sending = true

        let data = {
          message: this.message,
          email: this.email,
          name: this.name
        }
        this.$http.secured.post('contact', data)
          .then(response => {
            this.successDialog.title = 'Sent'
            this.successDialog.message = response.data
            this.successDialog.show = true
            this.message = ''
            this.email = ''
            this.name = ''
          })
          .catch(error => {
            if (error.response) {
              let errors = error.response.data.messages
              let msg = []
              Object.keys(errors).forEach(key => {
                msg.push(errors[key])
              })
              this.snackbarText = msg.join(',')
            }else{
              this.snackbarText = "Something went wrong! Please try again."
            }
            this.snackbar = true
          })
          .then(function () {
            self.sending = false
          })
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
  beforeDestroy() {
    const vm = this;
    const dataToBeDestroy = ['aboutBanner', 'mode',
    'miles', 'makers', 'machine', 'contactInfo',
     'successDialog', 'snackbarText'];
    dataToBeDestroy.forEach(data => {
      vm[data] = null;
      delete vm[data];
    });
  },
  destroyed() {
    this.$destroy();
  }
};
</script>
<style lang="scss">
#cursor-fx {
  z-index: 999999px;
}
#myAudio {
  img {
    cursor:pointer;
  }
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
.preloader {
  margin: 0 auto;
  position: absolute;
  top: 250px;
  left: 0;
  right: 0;
  z-index: 2;
  width: 250px;
  img {
    width: 100%;
  }
}
.pagination {
  margin: 20px auto 0;
  width: 400px;
  text-align: center;
  ul {
    display: flex;
    list-style: none;
    li {
      flex: 1;
      color: #000;
      font-size: 14px;
      font-weight: bold;
      list-style: none;

      &.page-item.active {
        a {
          color: #53127c;
        }
      }

      &.prevlink {
        a {
          font-size: 30px;
          position: relative;
          top: -14px;
          font-weight: normal;
        }
      }
      &.nextlink {
        a {
          font-size: 30px;
          position: relative;
          top: -14px;
          font-weight: normal;
        }
      }

      a {
        color: #000;
        outline: none;
        border: none;
      }
    }
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
            .article-image {
              background-size: cover;
              background-position:center;
              height:100%;
            }
            img {
              width: 100%;
              height: 100%;
              background-size: cover;
              background-position:center;
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

          img {
              cursor:pointer;
            }
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
            a {
              color:#000;
              text-decoration:none;
            }
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
          cursor:pointer;
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
