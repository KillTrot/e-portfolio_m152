<template>
  <div>
    <div class="close" @click="close" @mouseenter="showCloseIcon = true">
      <x-icon size="2.5x"></x-icon>
    </div>
    <table>
      <thead>
        <th>
          <td>Motorisierung</td>
        </th>

        <tr>
            <td>6 Zylinder Saugermotor</td>
        </tr>
        <th>
            <td>Antrieb</td>
        </th>
        <tr><td>Heckantrieb, 6 Gang Automatik</td></tr>
        <th><td>Leistung</td></th>
        <tr><td>303 PS</td></tr>
        <th><td>0-100 km/h</td></th>
        <tr><td>5.6 Sekunden</td></tr>
        <th><td>Gewicht</td></th>
        <tr><td>1.7 t</td></tr>
        <th><td>Preis</td></th>
        <tr><td>12'500.- CHF (Occassion), 49'500.- CHF (Neupreis)</td></tr>
        <th><td>Drehmoment</td></th>
        <tr><td>360 Newtonmeter</td></tr>
        <th><td>Hubraum</td></th>
        <tr><td>3778 cm<sup>3</sup></td></tr>
      </thead>
    </table>
  </div>
</template>

<script>
import { XIcon } from "vue-feather-icons";
export default {
  name: "Information",
  components: {
    XIcon,
  },
  data: () => ({}),

  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  overflow-y: auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: linear-gradient(
    to top,
    rgba(150, 54, 148, 0.5),
    rgba(42, 42, 42, 1)
  );
  table {
    color: white;
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translate(-50%);
  }
  .close {
    padding: 5px;
    border-radius: 10px;
    padding-bottom: 1px;
    background: #434343;
    position: absolute;
    top: 10px;
    left: 10px;
    width: auto;
    height: auto;
    * {
      color: white;
      z-index: 103;
    }
    z-index: 102;
  }
}
</style>