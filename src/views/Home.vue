<template>
  <main class="main">
    <div class="eyecatch"></div>
    <section class="section concept">
      <div class="section__container">
        <div class="concept__sentence-content">
          <h2 class="section__title">Concept</h2>
          <h3 class="section__subtitle">空間に「デザイナーズ水槽」で<br class="br__sp">癒しを提供する</h3>
          <p class="section__sentence">水槽というと、趣味の範囲の自宅観賞用を連想される方も多いはず。</p>
          <p class="section__sentence">弊社ではBtoB、BtoC関わらず、様々なシーンで活躍できるツールとして『デザイナーズ水槽』をご提案しております。</p>
          <p class="section__sentence">弊社と一般的な水槽設置業者との一番の違いは、『提案力』『デザイン性』『価格』『顧客満足度』です。</p>
        </div>
        <img src="../assets/concept__img.png" alt="海水魚のアクアリウムの画像" class="concept__img">
      </div>
    </section>

    <section class="section section--gray">
      <div class="section__container">
        <h2 class="section__title">Why Union</h2>
        <div class="reason__content">
          <div class="section__box reason__box">
            <img src="../assets/fish2.png" alt="fishのicon画像" class="reason__icon">
            <h3 class="section__subtitle">オーダー水槽</h3>
            <p class="section__sentence">完全オーダーメイドも可能で設置場所の雰囲気やイメージに合わせて最も効果的に水槽を露出できるよう設計します</p>
          </div>

          <div class="section__box reason__box">
            <img src="../assets/anemone-fish.png" alt="fishのicon画像" class="reason__icon">
            <h3 class="section__subtitle">デザイン性</h3>
            <p class="section__sentence">弊社は、1000社以上の実績と経験からお客様に合ったデザインを導き出し、レイアウトする事が出来ます。</p>
          </div>

          <div class="section__box reason__box">
            <img src="../assets/fish.png" alt="fishのicon画像" class="reason__icon">
            <h3 class="section__subtitle">提案力</h3>
            <p class="section__sentence">弊社はこの道のプロフェッショナルとしてお客様に出来るだけ多くのメリットがあるご提案を得意としています。</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section design">
      <div class="section__container">
        <h2 class="section__title">Design</h2>
        <Slider/>
      </div>
    </section>

    <section class="section section__bgi section__bgi--plan center-item__sp">
      <div class="section__container">
        <div class="section__bgi-plan-sentence">
          <h2 class="section__title">Plan</h2>
          <p class="section__sentence section__sentence--mb">お客様のご予算やイメージに合わせて<br>最適なプランをご提供します。</p>
          <button type="button" name="more" class="button button-square">詳しくはこちら</button>
        </div>
      </div>
    </section>

    <section class="section section__bgi section__bgi--work center-item__sp">
      <div class="section__container">
        <div class="section__bgi-work-sentence">
          <h2 class="section__title">Work</h2>
          <p class="section__sentence section__sentence--mb">お客様のご予算やイメージに合わせて<br>最適なプランをご提供します。</p>
          <button type="button" name="more" class="button button-square">詳しくはこちら</button>
        </div>
      </div>
    </section>

    <section class="section section--gray center-item__sp">
      <div class="section__container">
        <h2 class="section__title">Contact</h2>
        <p class="section__sentence section__sentence--mb">お見積もりのご相談からオーダー水槽やデザイン水槽について<br class="br__pc">お気軽にお問い合わせ下さい。</p>
        <router-link to="/contact">
          <button type="button" name="more" class="button button-square">詳しくはこちら</button>
        </router-link>
      </div>
    </section>
  </main>
</template>

<script>
import Slider from '@/components/Slider.vue'
export default {
  name: 'Home',
  data() {
    return {
      windowW: window.innerWidth,
      windowH: window.innerHeight,
    };
  },
  components: {
    Slider
  }
}
</script>

<style scoped>
  .concept__img {
    display: none;
  }
  .section__bgi {
    background-size: cover;
    height: 100vw;
  }
    .section__bgi--plan {
      background-image: url("../assets/bgi__plan.jpg");
    }
    .section__bgi--work {
      background-image: url("../assets/bgi__work.jpg");
    }
@media screen and (min-width:1080px) {
  .concept .section__container {
    display: flex;
    flex-direction: row;
  }
  .concept__sentence-content {
    text-align: left;
  }
  .concept__img {
    display: block;
    width: 412px;
    margin-left: 26px;
  }

  .reason__content {
    display: flex;
    flex-direction: row;
  }
  .reason__box {
    text-align: center;
    margin-right: 72px;
  }
  .reason__box:last-of-type {
    margin-right: 0;
  }
  .reason__box .section__sentence {
    text-align: center;
  }
  .reason__icon {
    width: 64px;
  }

  .design .section__container {
    padding: 64px 0;
    max-width: none;
  }
  .section__bgi {
    box-sizing: border-box;
    padding: 0 18px;
    position: relative;
    height: 38.19vw;
  }
  .section__bgi .section__container {
    position: relative;
  }
    .section__bgi--plan {
      background-image: url("../assets/bgi__plan--pc.jpg");
    }
    .section__bgi--work {
      background-image: url("../assets/bgi__work--pc.jpg");
    }
    .section__bgi-plan-sentence {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      text-align: left;
    }
    .section__bgi-plan-sentence > .section__sentence {
      text-align: left;
    }
    .section__bgi-work-sentence {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      text-align: right;
    }
    .section__bgi-work-sentence > .section__sentence {
      text-align: right;
    }
}
</style>
