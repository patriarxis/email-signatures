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
                    padding: 16px;
                    background-color: #e6e6e6;
                    border-radius: 16px;
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
                        <td
                          style="
                            background-color: #08442b;
                            border-radius: 12px;
                            padding: 16px;
                          "
                        >
                          <table
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
                                    style="
                                      border-collapse: separate;
                                      border-spacing: 0;
                                      width: 100%;
                                    "
                                  >
                                    <tbody>
                                      <tr>
                                        <td>
                                          <h1
                                            style="
                                              font-family: 'Trebuchet MS',
                                                sans-serif;
                                              margin: 0;
                                              font-size: 18px;
                                              font-weight: 900;
                                              color: #ffffff;
                                            "
                                          >
                                            {{ name }}
                                          </h1>
                                        </td>
                                      </tr>

                                      <tr>
                                        <td>
                                          <h2
                                            style="
                                              font-family: 'Trebuchet MS',
                                                sans-serif;
                                              margin: 0;
                                              font-size: 15px;
                                              font-weight: normal;
                                              color: rgba(255, 255, 255, 0.7);
                                              margin-top: 8px;
                                            "
                                          >
                                            {{ description }}
                                          </h2>
                                        </td>
                                      </tr>

                                      <tr>
                                        <td
                                          style="
                                            padding-top: 8px;
                                            font-size: 13px;
                                          "
                                        >
                                          <template
                                            v-for="(
                                              socialLink, index
                                            ) in socialLinks"
                                            :key="socialLink.url"
                                          >
                                            <a
                                              :href="socialLink.url"
                                              target="_blank"
                                              style="
                                                font-family: 'Trebuchet MS',
                                                  sans-serif;
                                                display: inline-block;
                                                color: rgba(255, 255, 255, 0.5);
                                                text-decoration: none;
                                              "
                                            >
                                              {{ socialLink.text }}
                                            </a>
                                            <span
                                              v-if="
                                                index < socialLinks.length - 1
                                              "
                                              style="
                                                display: inline-block;
                                                width: 3px;
                                                height: 3px;
                                                background-color: rgba(
                                                  255,
                                                  255,
                                                  255,
                                                  0.5
                                                );
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

                                <td style="width: 40px">
                                  <a :href="websiteUrl">
                                    <img
                                      src="https://placeholder.com/40x40"
                                      alt=""
                                      style="
                                        width: 40px;
                                        height: 40px;
                                        float: right;
                                      "
                                    />
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>

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
                        <td style="padding-top: 16px">
                          <p
                            style="
                              font-family: 'Trebuchet MS', sans-serif;
                              margin: 0;
                              font-size: 13px;
                              color: #666666;
                            "
                          >
                            {{ copyrights }}
                          </p>
                          <p
                            style="
                              font-family: 'Trebuchet MS', sans-serif;
                              margin: 0;
                              margin-top: 12px;
                              font-size: 13px;
                              color: #666666;
                            "
                          >
                            {{ companyTagline }}
                          </p>
                          <p
                            style="
                              font-family: 'Trebuchet MS', sans-serif;
                              margin-bottom: 0;
                              margin-top: 12px;
                              font-size: 12px;
                              color: #666666;
                            "
                          >
                            <i>{{ disclaimer }}</i>
                          </p>
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
  name: "CorporatePro",
  props: {
    name: { type: String, required: true },
    description: { type: String, required: true },
    websiteUrl: { type: String, required: true },
    companyTagline: { type: String, default: "" },
    socialLinks: { type: Array, default: () => [] },
    copyrights: { type: String, required: true },
    disclaimer: { type: String, required: true },
  },
};
</script>
