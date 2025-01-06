<template>
  <table
    cellspacing="0"
    cellpadding="0"
    style="
      border-collapse: separate;
      border-spacing: 0;
      width: 100%;
      font-family: sans-serif;
      max-width: 800px;
      min-width: 500px;
      color: #000000;
      display: table;
      vertical-align: top;
    "
  >
    <tbody>
      <tr>
        <td style="border-radius: 12px; padding: 16px; background: #e8e8e8">
          <table
            style="border-collapse: seperate; border-spacing: 0; width: 100%"
            cellspacing="0"
            cellpadding="0"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    style="
                      border-collapse: seperate;
                      border-spacing: 0;
                      width: 100%;
                    "
                    cellspacing="0"
                    cellpadding="0"
                  >
                    <tbody>
                      <tr>
                        <td style="width: 56px; padding-right: 16px">
                          <a href="#" target="_blank"
                            ><img
                              src="https://placeholder.com/56x56"
                              width="56"
                              height="56"
                              style="border-radius: 50%"
                          /></a>
                        </td>

                        <td>
                          <table
                            style="
                              border-collapse: seperate;
                              border-spacing: 0;
                              width: 100%;
                            "
                            cellspacing="0"
                            cellpadding="0"
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <h1
                                    style="
                                      margin: 0px;
                                      font-size: 16px;
                                      font-weight: 700;
                                      color: #000000;
                                      font-family: 'Trebuchet MS', sans-serif;
                                    "
                                  >
                                    {{ name }}
                                  </h1>

                                  <h2
                                    style="
                                      margin: 0;
                                      font-size: 14px;
                                      font-weight: 400;
                                      color: #4d4d4d;
                                      margin-top: 4px;
                                      font-family: 'Trebuchet MS', sans-serif;
                                    "
                                  >
                                    {{ description }}
                                  </h2>
                                </td>

                                <td style="float: right">
                                  <a
                                    href="#"
                                    style="
                                      display: inline-block;
                                      text-decoration: none;
                                    "
                                    target="_blank"
                                    ><img
                                      style="
                                        width: 20px;
                                        height: 20px;
                                        border-radius: 50%;
                                      "
                                      src="https://placeholder.com/20x20"
                                  /></a>

                                  <a
                                    style="
                                      display: inline-block;
                                      text-decoration: none;
                                      margin-left: 8px;
                                    "
                                    href="#"
                                    target="_blank"
                                    ><img
                                      style="
                                        width: 20px;
                                        height: 20px;
                                        border-radius: 50%;
                                      "
                                      src="https://placeholder.com/20x20"
                                  /></a>

                                  <a
                                    style="
                                      display: inline-block;
                                      text-decoration: none;
                                      margin-left: 8px;
                                    "
                                    href="#"
                                    target="_blank"
                                    ><img
                                      style="
                                        width: 20px;
                                        height: 20px;
                                        border-radius: 50%;
                                      "
                                      src="https://placeholder.com/20x20"
                                  /></a>

                                  <a
                                    style="
                                      display: inline-block;
                                      text-decoration: none;
                                      margin-left: 8px;
                                    "
                                    href="#"
                                    target="_blank"
                                    ><img
                                      style="
                                        width: 20px;
                                        height: 20px;
                                        border-radius: 50%;
                                      "
                                      src="https://placeholder.com/20x20"
                                  /></a>
                                </td>
                              </tr>
                            </tbody>
                          </table>

                          <table
                            style="
                              border-collapse: seperate;
                              border-spacing: 0;
                              width: 100%;
                            "
                            cellspacing="0"
                            cellpadding="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    padding-top: 6px;
                                    font-size: 12px;
                                    font-family: 'Trebuchet MS', sans-serif;
                                  "
                                >
                                  <template
                                    v-for="(socialLink, index) in socialLinks"
                                    :key="socialLink.url"
                                  >
                                    <a
                                      :href="socialLink.url"
                                      target="_blank"
                                      style="
                                        padding-top: 6px;
                                        font-size: 12px;
                                        font-family: 'Trebuchet MS', sans-serif;
                                      "
                                    >
                                      {{ socialLink.text }}
                                    </a>
                                    <span
                                      v-if="index < socialLinks.length - 1"
                                      style="
                                        display: inline-block;
                                        width: 3px;
                                        height: 3px;
                                        background-color: #666666;
                                        border-radius: 50%;
                                        margin: 3px 4px;
                                      "
                                    ></span>
                                  </template>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "ProfilePlus",
  props: {
    name: { type: String, required: true },
    description: { type: String, required: true },
    socialLinks: { type: Array, default: () => [] },
  },
};
</script>
