<template>
  <div class="langsContainer">
    <p class="textSwitcher">{{ $t("main.languageOption") }}</p>
    <ul class="listOfLangs">
      <li
        v-for="language in locales"
        :key="language"
        @click="switchLang(language)"
        class="langItem"
      >
        {{ language === "en" ? "Español" : "🏴󠁧󠁢󠁥󠁮󠁧󠁿" }}
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LangSwitcher",
  methods: {
    switchLang(language) {
      if (this.$i18n.locale !== language) {
        this.$i18n.locale = language;
      }
    },
  },
  // created() {
  //   console.log(this.locales);
  // },
  data() {
    return {
      locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(','),
    };
  },
});
</script>
<style scoped>
  .langsContainer {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
  .textSwitcher {
    font-size: 0.8rem;
    margin-bottom: 1rem;
    line-height: 0.5;
  }
  .listOfLangs {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    line-height: 0.5;
  }
  .langItem {
    font-size: 1.5rem;
    padding: 0.5rem;
    cursor: pointer;
  }
</style>
