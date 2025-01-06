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
      color: #f2f2f2;
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
                <td style="padding-bottom: 4px">
                  <table
                    cellspacing="0"
                    cellpadding="0"
                    style="
                      border-collapse: separate;
                      border-spacing: 0;
                      width: 100%;
                      background-color: #0d0d0d;
                      border: 1px solid #4d4d4d;
                      border-radius: 8px;
                      padding: 16px;
                    "
                  >
                    <tbody>
                      <tr>
                        <td>
                          <h1
                            style="
                              margin: 0;
                              font-size: 20px;
                              font-weight: 900;
                              color: #f2f2f2;
                            "
                          >
                            {{ name }}
                          </h1>
                          <a
                            href="#"
                            style="
                              margin: 0;
                              font-size: 16px;
                              font-weight: 400;
                              color: #f2f2f2;
                              display: block;
                              text-decoration: none;
                              width: max-content;
                              margin-top: 4px;
                            "
                          >
                            {{ phone }}
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>

              <tr>
                <td
                  style="
                    background-color: #0d0d0d;
                    border: 1px solid #4d4d4d;
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
                          <img
                            src="https://placeholder.com/48x48"
                            alt="3ll-logo"
                            style="
                              width: 48px;
                              height: 48px;
                              border-radius: 4px;
                            "
                          />
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
                                <td style="padding: 16px 0">
                                  <h1
                                    style="
                                      margin: 0;
                                      font-size: 20px;
                                      font-weight: 900;
                                      color: #f2f2f2;
                                    "
                                  >
                                    {{ companyName }}
                                  </h1>
                                  <h2
                                    style="
                                      margin: 0;
                                      font-size: 16px;
                                      font-weight: 400;
                                      color: #f2f2f2;
                                    "
                                  >
                                    {{ companyTagline }}
                                  </h2>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding-bottom: 16px">
                                  <a
                                    v-for="bodyLink in bodyLinks"
                                    :key="bodyLink.url"
                                    :href="bodyLink.url"
                                    target="_blank"
                                    style="
                                      display: block;
                                      color: #f2f2f2;
                                      text-decoration: none;
                                      font-size: 14px;
                                      font-weight: 400;
                                      width: max-content;
                                    "
                                  >
                                    {{ bodyLink.text }}
                                  </a>
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
                                    border-top: 1px solid #4d4d4d;
                                    padding-top: 16px;
                                    font-size: 14px;
                                  "
                                >
                                  <a
                                    v-for="socialLink in socialLinks"
                                    :key="socialLink.url"
                                    :href="socialLink.url"
                                    target="_blank"
                                    style="
                                      display: inline-block;
                                      color: #f2f2f2;
                                      text-decoration: none;
                                    "
                                  >
                                    {{ socialLink.text }}
                                  </a>
                                  <span
                                    style="
                                      display: inline-block;
                                      width: 3px;
                                      height: 3px;
                                      background-color: #4d4d4d;
                                      border-radius: 50%;
                                      margin: 3px 4px;
                                    "
                                  ></span>
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
  name: "DarkEdge",
  props: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    companyName: { type: String, required: true },
    companyTagline: { type: String, default: "" },
    bodyLinks: { type: Array, default: () => [] },
    socialLinks: { type: Array, default: () => [] },
  },
};
</script>
