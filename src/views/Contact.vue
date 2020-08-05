<template>
  <main class="main">
    <div class="eyecatch eyecatch--contact"></div>
    <section>
      <div class="section__container">
        <h2 class="section__title">Contact form</h2>
        <p class="section__sentence contact__explanation">お問い合わせは下記のフォームより承っております。<br>
          ※休業日・営業時間、またはお問合せの内容により、回答までにお時間をいただく場合がございます。<br>
          ※お預かりする個人情報はお問い合わせの返答にのみ利用します。第三者に提供することはありません。</p>

        <form class="form" action="index.html" method="post">
          <div class="form__content">
            <label class="form__label">お名前</label>
            <input type="text" class="form__item-input form__input">

            <label class="form__label">メールアドレス</label>
            <input type="text" class="form__item-input form__input">

            <label class="form__label">お問い合わせ項目</label>
            <select class="form__item-input form__toggle-list">
              <option v-for="option in options" :key="option.id">
                {{ option.text }}
              </option>
            </select>

            <label class="form__label">お問い合わせ内容</label>
            <textarea rows="8" class="form__item-input form__textarea"></textarea>
          </div>

          <button type="submit" class="button button-square">送信</button>
        </form>

      </div>
    </section>
  </main>
</template>

<script>

export default {
  name: 'Contact',
  data() {
    return {
      options: [
        { text: 'オーダー水槽', value: 'order aquarium' },
        { text: 'デザイナーズ水槽', value: 'designer aquarium' },
        { text: 'お見積もり', value: 'mitsumori' },
        { text: 'その他', value: 'other' },
      ],
    }
  },
  methods: {
    handleResize: function() {
      this.windowW = window.innerWidth;
      this.windowH = window.innerHeight;
    }
  },
  mounted: function () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  }

}
</script>

<style scoped>
select{
  background:#fff;
}
  .eyecatch--contact {
    background-image: url("../assets/eyecatch-contact.jpg");
  }
  .contact__explanation {
    margin-bottom: 64px;
  }
  .button-square {
    text-align: center;
    color: #fff;
    font-weight: bold;
    background-color: #0d6fc4;
  }

.form {

}
  .form__content {
    text-align: left;
  }
  .form__label {
    display: block;
    margin-bottom: 18px;
    font-family: 'Noto Serif JP', serif;
    font-size: 1.8rem;
  }
  .form__item-input {
    margin-bottom: 42px;
  }
  .form__input {
    box-sizing: border-box;
    width: 100%;
    height: 30px;
    font-size: 1.6rem;
    border-radius: 4px;
  }
  .form__toggle-list {
    width: 100%;
    height: 30px;
    font-size: 1.6rem;
    border-radius: 4px;
  }
  .form__textarea {
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
  }
</style>
