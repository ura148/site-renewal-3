<template>
  <main class="main">
    <div class="eyecatch"></div>
    <section class="section">
      <div class="section__container">
        <div>
          <h2 class="section__title">Concept</h2>
          <h3 class="section__subtitle">空間に「デザイナーズ水槽」で<br>癒しを提供する</h3>
          <p class="section__sentence">水槽というと、趣味の範囲の自宅観賞用を連想される方も多いはず。</p>
          <p class="section__sentence">弊社ではBtoB、BtoC関わらず、様々なシーンで活躍できるツールとして『デザイナーズ水槽』をご提案しております。</p>
          <p class="section__sentence">弊社と一般的な水槽設置業者との一番の違いは、『提案力』『デザイン性』『価格』『顧客満足度』です。</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section__container section__container__gray">
        <h2 class="section__title">Why Union</h2>
        <div class="section__box">
          <h3 class="section__subtitle">オーダー水槽</h3>
          <p class="section__sentence">完全オーダーメイドも可能で設置場所の雰囲気やイメージに合わせて最も効果的に水槽を露出できるよう設計します</p>
        </div>

        <div class="section__box">
          <h3 class="section__subtitle">デザイン性</h3>
          <p class="section__sentence">我々は、1000社以上の実績と経験からお客様に合ったデザインを導き出し、レイアウトする事が出来ます。</p>
        </div>

        <div class="section__box">
          <h3 class="section__subtitle">提案力</h3>
          <p class="section__sentence">弊社はこの道のプロフェッショナルとしてお客様に出来るだけ多くのメリットがあるご提案を得意としています。</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section__container">
        <h2 class="section__title">Design</h2>
        <Slider/>
      </div>
    </section>

    <section class="section section__bgi section__bgi--plan center-item__sp">
      <div>
        <h2 class="section__title">Plan</h2>
        <p class="section__sentence section__sentence--mb">お客様のご予算やイメージに合わせて<br>最適なプランをご提供します。</p>
        <button type="button" name="more" class="button button-square">詳しくはこちら</button>
      </div>
    </section>

    <section class="section section__bgi section__bgi--work center-item__sp">
      <div>
        <h2 class="section__title">Work</h2>
        <p class="section__sentence section__sentence--mb">お客様のご予算やイメージに合わせて<br>最適なプランをご提供します。</p>
        <button type="button" name="more" class="button button-square">詳しくはこちら</button>
      </div>
    </section>

    <section class="section center-item__sp">
      <div class="section__container section__container__gray">
        <h2 class="section__title">Contact</h2>
        <p class="section__sentence section__sentence--mb">お見積もりのご相談からオーダー水槽やデザイン水槽についてお気軽にお問い合わせ下さい。</p>
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
  components: {
    Slider
  }
}
</script>

<style scoped>
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
</style>
