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
      color: #0d0d0d;
      display: table;
      vertical-align: top;
    "
  >
    <tbody>
      <tr>
        <td>
          <table
            cellspacing="0"
            cellpadding="0"
            style="border-collapse: separate; border-spacing: 0; width: 100%"
          >
            <tbody>
              <tr>
                <td
                  style="
                    background-color: #f2f2f2;
                    border: 1px solid #b3b3b3;
                    border-radius: 8px;
                    padding: 16px;
                  "
                >
                  <table
                    cellspacing="0"
                    cellpadding="0"
                    style="
                      border-collapse: separate;
                      border-spacing: 0;
                      width: 100%;
                    "
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            cellspacing="0"
                            cellpadding="0"
                            style="
                              border-collapse: separate;
                              border-spacing: 0;
                              width: 100%;
                            "
                          >
                            <tbody>
                              <tr>
                                <td style="padding-bottom: 16px">
                                  <h1
                                    style="
                                      margin: 0;
                                      font-size: 20px;
                                      font-weight: 900;
                                      color: #0d0d0d;
                                    "
                                  >
                                    {{ name }}
                                  </h1>
                                  <h2
                                    style="
                                      margin: 0;
                                      font-size: 16px;
                                      font-weight: 400;
                                      color: #0d0d0d;
                                    "
                                  >
                                    {{ description }}
                                  </h2>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding-bottom: 16px">
                                  <a
                                    v-for="(bodyLink, index) in bodyLinks"
                                    :key="index"
                                    :href="bodyLink.url"
                                    target="_blank"
                                    style="
                                      display: block;
                                      color: #0d0d0d;
                                      text-decoration: none;
                                      font-size: 14px;
                                      font-weight: 400;
                                      width: max-content;
                                      margin-bottom: 4px;
                                    "
                                    >{{ bodyLink.text }}</a
                                  >
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <table
                            cellspacing="0"
                            cellpadding="0"
                            style="
                              border-collapse: separate;
                              border-spacing: 0;
                              width: 100%;
                            "
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    border-top: 1px solid #b3b3b3;
                                    padding-top: 16px;
                                    font-size: 14px;
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
                                        display: inline-block;
                                        color: #0d0d0d;
                                        text-decoration: none;
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
                                        background-color: #b3b3b3;
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
  name: "CleanSlate",
  props: {
    name: { type: String, required: true },
    description: { type: String, default: "" },
    bodyLinks: { type: Array, default: () => [] },
    socialLinks: { type: Array, default: () => [] },
  },
};
</script>
