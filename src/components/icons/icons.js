import React from "react";

//Board cell
export const Board = ({ className, color = "#C9F9FC" , onClick }) => {
  return (
    <svg
      viewBox="0 0 224 223"
      fill="none"
      className={className}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="9"
        width="210"
        height="209"
        rx="11"
        fill={color}
        stroke="black"
        stroke-width="10"
      />
      <rect
        x="8"
        y="4"
        width="212"
        height="211"
        rx="12"
        fill={color}
        stroke="black"
        stroke-width="8"
      />
    </svg>
  );
};

// Player X
export const X = ({ className }) => {
  return (
    <svg
      width="233"
      height="233"
      viewBox="0 0 233 233"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="8"
        y="16"
        width="210"
        height="209"
        rx="11"
        fill="#C9F9FC"
        stroke="black"
        stroke-width="10"
      />
      <rect
        x="11"
        y="11"
        width="212"
        height="211"
        rx="12"
        fill="#C9F9FC"
        stroke="black"
        stroke-width="8"
      />
      <path
        d="M89.632 52.004C89.7806 51.9983 89.9293 52.0149 90.073 52.053C91.029 52.627 106.7 80.721 113.389 96.393H114.537C122.756 81.103 138.427 52.244 139.765 52.053C139.795 52.0513 139.824 52.0513 139.854 52.053C142.554 52.053 170.154 59.538 170.343 61.803C170.535 64.288 140.529 117.228 139.191 119.139C146.454 131.179 173.019 178.195 172.829 179.533C172.285 180.985 148.123 189.161 140.292 189.161C139.924 189.164 139.556 189.14 139.192 189.089C138.046 188.706 122.374 160.038 114.347 144.367H113.2C105.364 160.038 89.883 188.706 88.928 188.706C88.3791 188.793 87.8238 188.834 87.268 188.826C78.874 188.826 56.411 182.291 56.056 180.871C55.674 179.533 81.6661 131.944 89.5021 119.139C88.3541 117.419 58.923 64.479 59.114 61.994C59.114 59.801 85.358 52.007 89.634 52.007L89.632 52.004ZM89.634 40.007C84.95 40.007 74.811 42.964 69.183 44.727C66.296 45.627 62.135 47.004 58.717 48.41C55.317 49.81 47.435 53.048 47.124 61.474C46.936 65.125 48.157 67.915 52.952 77.224C55.479 82.13 58.952 88.643 63.262 96.582C66.928 103.329 72.085 112.7 75.63 119.027C70.938 127.137 64.45 138.833 59.155 148.573C55.196 155.854 51.808 162.209 49.355 166.954C44.698 175.967 43.101 179.054 44.476 184.029C46.254 190.6 52.269 192.737 55.882 194.021C58.489 194.947 61.911 195.993 65.517 196.966C70.857 198.408 80.783 200.826 87.265 200.826C88.3051 200.832 89.3443 200.765 90.375 200.626C96.089 199.967 98.975 195.526 99.975 193.992C100.606 193.022 101.394 191.724 102.384 190.024C104.078 187.118 106.371 183.013 109.016 178.154C110.597 175.254 112.236 172.203 113.861 169.149C115.539 172.249 117.224 175.34 118.837 178.263C121.537 183.157 123.878 187.293 125.604 190.228C128.789 195.644 130.71 198.913 135.384 200.473L136.366 200.801L137.388 200.956C138.348 201.098 139.318 201.167 140.288 201.163C146.275 201.163 155.88 198.541 162.883 196.342C166.627 195.166 170.223 193.915 173.011 192.817C177.011 191.241 181.988 189.281 184.062 183.747L184.52 182.523L184.705 181.23C185.33 176.848 184.039 174.452 179.236 165.536C176.783 160.984 173.336 154.742 169.269 147.484C163.449 137.101 157.351 126.406 153.105 119.116C157.127 112.101 162.955 101.695 165.832 96.508C170.226 88.584 173.769 82.063 176.365 77.125C181.447 67.45 182.605 64.791 182.304 60.883V60.847V60.81C181.614 52.51 173.895 49.549 170.185 48.123C166.738 46.799 162.449 45.463 159.457 44.576C153.766 42.887 143.657 40.055 139.857 40.055C139.462 40.055 139.065 40.073 138.679 40.108L138.373 40.135L138.073 40.179C131.954 41.054 129.258 45.54 126.136 50.735C124.427 53.579 122.114 57.608 119.263 62.713C117.748 65.424 116.156 68.303 114.563 71.213C112.894 67.994 111.356 65.105 110.163 62.881C107.796 58.481 105.463 54.274 103.587 51.028C100.64 45.922 99.295 43.591 96.267 41.773L95.133 41.092L93.879 40.674C92.5139 40.2241 91.0844 40.0001 89.647 40.011L89.634 40.007Z"
        fill="black"
      />
      <path
        d="M94.637 43.997C94.7853 43.9912 94.9336 44.0078 95.077 44.046C96.034 44.62 111.705 72.714 118.394 88.386H119.537C127.754 73.096 143.426 44.238 144.764 44.046C144.794 44.0444 144.824 44.0444 144.854 44.046C147.554 44.046 175.154 51.531 175.344 53.796C175.536 56.282 145.529 109.221 144.191 111.132C151.454 123.172 178.02 170.188 177.829 171.526C177.284 172.978 153.122 181.154 145.292 181.154C144.924 181.157 144.556 181.133 144.192 181.082C143.046 180.7 127.374 152.032 119.347 136.36H118.2C110.364 152.032 94.883 180.7 93.927 180.7C93.3781 180.787 92.8227 180.826 92.267 180.819C83.874 180.819 61.411 174.285 61.056 172.864C60.673 171.526 86.6661 123.937 94.5021 111.132C93.3541 109.413 63.921 56.472 64.113 53.987C64.113 51.794 90.357 44 94.634 44L94.637 43.997ZM94.634 32C89.95 32 79.81 34.957 74.183 36.72C71.295 37.62 67.135 38.997 63.717 40.403C60.317 41.803 52.435 45.041 52.123 53.467C51.935 57.119 53.156 59.909 57.951 69.217C60.478 74.123 63.951 80.636 68.261 88.576C71.927 95.322 77.085 104.693 80.629 111.02C75.937 119.13 69.449 130.827 64.154 140.566C60.195 147.847 56.808 154.203 54.354 158.947C49.698 167.96 48.1 171.047 49.475 176.022C51.252 182.593 57.269 184.73 60.881 186.014C63.489 186.94 66.911 187.986 70.516 188.959C75.856 190.401 85.782 192.819 92.264 192.819C93.3044 192.825 94.3439 192.758 95.375 192.619C101.088 191.959 103.975 187.519 104.975 185.984C105.606 185.014 106.393 183.716 107.383 182.016C109.077 179.11 111.37 175.005 114.016 170.146C115.596 167.246 117.236 164.195 118.861 161.141C120.538 164.241 122.223 167.332 123.837 170.255C126.537 175.149 128.878 179.286 130.604 182.22C133.788 187.636 135.704 190.905 140.384 192.465L141.366 192.793L142.387 192.948C143.347 193.09 144.317 193.159 145.287 193.155C151.273 193.155 160.878 190.534 167.882 188.334C171.624 187.159 175.222 185.907 178.009 184.809C182.009 183.233 186.986 181.273 189.06 175.739L189.519 174.515L189.703 173.222C190.328 168.84 189.037 166.444 184.234 157.528C181.783 152.976 178.334 146.734 174.267 139.476C168.449 129.093 162.349 118.398 158.105 111.108C162.126 104.093 167.955 93.687 170.83 88.5C175.224 80.577 178.769 74.055 181.363 69.118C186.447 59.442 187.605 56.784 187.302 52.875V52.839V52.802C186.613 44.502 178.894 41.541 175.185 40.116C171.736 38.791 167.447 37.456 164.457 36.568C158.765 34.879 148.651 32.047 144.857 32.047C144.457 32.047 144.064 32.065 143.679 32.1L143.373 32.127L143.073 32.171C136.954 33.046 134.259 37.533 131.136 42.727C129.428 45.571 127.115 49.6 124.262 54.706C122.749 57.416 121.162 60.295 119.562 63.206C117.894 59.986 116.356 57.097 115.162 54.874C112.795 50.474 110.462 46.266 108.586 43.02C105.639 37.92 104.293 35.583 101.266 33.765L100.132 33.084L98.878 32.667C97.513 32.2163 96.0835 31.992 94.646 32.003L94.634 32Z"
        fill="black"
      />
      <path
        d="M115.188 136.356C107.352 152.028 91.872 180.696 90.917 180.696C84.417 181.842 58.426 174.389 58.044 172.86C57.662 171.522 83.653 123.933 91.489 111.128C90.342 109.409 60.911 56.468 61.101 53.983C61.101 51.691 89.769 43.283 92.063 44.045C93.018 44.619 108.69 72.713 115.38 88.385H116.526C124.745 73.095 140.415 44.237 141.753 44.045C143.853 43.855 172.141 51.498 172.333 53.792C172.524 56.278 142.518 109.217 141.18 111.128C148.442 123.168 175.008 170.184 174.817 171.522C174.245 173.051 147.487 182.034 141.18 181.078C140.034 180.696 124.362 152.028 116.335 136.356H115.188Z"
        fill="#FCD015"
      />
      <path
        d="M141.677 181.078C140.531 180.696 124.859 152.028 116.837 136.356H115.685C107.849 152.028 92.369 180.696 91.414 180.696C85.631 181.716 64.405 175.924 59.537 173.56V170.37C64.32 160.27 84.919 122.715 91.883 111.297H141.783C149.189 123.603 175.508 170.19 175.319 171.521C174.775 172.973 150.619 181.147 142.783 181.148C142.413 181.152 142.043 181.129 141.677 181.078Z"
        fill="#FBB500"
      />
      <path
        d="M145.206 184.141C144.713 184.144 144.22 184.11 143.731 184.041L143.231 183.92C141.872 183.466 141.309 183.278 131.713 165.897C127.4 158.086 122.574 149.091 118.786 141.821C115.127 148.991 110.399 157.951 106.108 165.833C96.758 183.005 96.095 183.665 94.157 183.69C89.579 184.334 79.88 182.096 74.434 180.681C58.901 176.646 58.494 175.02 58.134 173.581C57.734 172.202 57.547 171.529 72.05 144.854C79.489 131.171 87.02 117.762 91.001 111.095C88.538 106.785 82.108 95.217 76.159 84.268C61.195 56.73 61.019 55.019 61.106 53.812C61.1566 53.2079 61.3481 52.624 61.6653 52.1074C61.9824 51.5907 62.4162 51.1556 62.932 50.837C66.646 48.159 92.084 39.884 96.012 41.192L96.326 41.292L96.61 41.463C97.257 41.852 98.235 42.44 107.21 59.12C109.615 63.587 115.056 73.853 119.151 82.737C141.379 41.485 142.326 41.35 144.326 41.064L144.48 41.046C147.606 40.769 173.112 47.806 176.916 51C177.309 51.3053 177.635 51.6872 177.876 52.1224C178.116 52.5576 178.266 53.0372 178.316 53.532C178.416 54.783 178.516 56.057 162.948 84.119C156.802 95.202 150.233 106.776 147.675 111.124C151.625 117.778 159.351 131.277 166.405 143.86C181.057 170.003 180.97 170.608 180.781 171.936L180.735 172.258L180.621 172.558C180.187 173.718 179.593 175.306 164.021 180.085C158.886 181.679 150.081 184.141 145.206 184.141ZM116.337 133.356H121.172L122.008 134.988C129.977 150.545 142.508 173.347 145.688 178.161C151.446 178.011 168.169 172.747 173.995 170.261C169.286 160.951 148.902 124.761 141.614 112.676L140.606 111.005L141.726 109.405C143.415 106.877 167.385 64.482 171.756 54.891C166.738 52.62 151.025 48.165 145.991 47.215C143.639 50.705 136.431 63.276 122.172 89.803L121.322 91.383H116.401L115.623 89.561C109.559 75.352 96.874 52.44 93.551 47.096C88.607 47.849 72.613 52.607 67.642 55.015C71.827 64.396 95.47 107.083 96.998 109.479L98.007 111.059L97.051 112.692C89.951 124.302 69.351 161.992 64.812 171.502C70.538 173.702 86.698 177.914 92.393 177.825C95.531 173.047 108.178 149.671 115.508 135.012L116.337 133.356Z"
        fill="#FCD015"
      />
      <path
        d="M48.86 55.603L53.987 47.398L58.317 55.034C58.317 55.034 55.708 60.805 55.47 60.963C55.232 61.121 48.86 55.603 48.86 55.603Z"
        fill="black"
      />
      <path
        d="M188.374 177.263L182.518 186.634L174.991 181.155L182.56 171.386L188.374 177.263Z"
        fill="black"
      />
    </svg>
  );
};

// Player O
export const O = ({ className }) => {
  return (
    <svg
      width="233"
      height="233"
      viewBox="0 0 233 233"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="8"
        y="16"
        width="210"
        height="209"
        rx="11"
        fill="#C9F9FC"
        stroke="black"
        stroke-width="10"
      />
      <rect
        x="11"
        y="11"
        width="212"
        height="211"
        rx="12"
        fill="#C9F9FC"
        stroke="black"
        stroke-width="8"
      />
      <path
        d="M177.009 55.4C163.235 40.744 143.909 33 121.116 33C104.039 33 88.929 37.589 76.581 46.364C68.2751 50.5279 60.8946 56.3245 54.881 63.407C42.705 77.66 36 96.816 36 117.345C36 166.336 66.813 199.252 112.674 199.252C130.182 199.252 145.527 194.636 157.92 185.809C166.339 181.605 173.79 175.692 179.796 168.447C191.518 154.376 197.974 135.361 197.974 114.904C197.976 90.57 190.726 69.994 177.009 55.4ZM121.677 181.817C81.863 181.817 57.005 153.591 57.005 111.91C57.005 90.51 65.541 69.425 82.638 56.81C91.8473 52.465 101.928 50.2834 112.11 50.432C151.362 50.432 176.97 76.785 176.97 120.339C176.97 141.352 169.037 162.654 151.811 175.41C143.428 179.459 133.427 181.817 121.677 181.817Z"
        fill="black"
      />
      <path
        d="M121.677 75.462C113.821 75.462 107.367 77.985 102.477 82.544C89.64 87.049 82.577 100.511 82.577 119.21C82.577 140.147 93.977 156.594 111.921 156.594C119.967 156.594 126.286 154.109 130.969 149.622C144.069 145.193 150.269 131.499 150.269 112.47C150.276 87.426 138.312 75.462 121.677 75.462ZM120.929 139.162C109.011 139.162 103.583 126.004 103.583 113.778C103.583 105.033 105.483 97.734 108.939 93.225V93.22C110.17 92.9995 111.418 92.8903 112.669 92.894C123.683 92.894 129.269 101.308 129.269 117.901C129.269 128.707 127.204 135.137 124.43 138.964C123.269 139.116 122.099 139.182 120.929 139.162Z"
        fill="black"
      />
      <path
        d="M185.974 114.982C185.974 148.064 166.347 181.895 121.674 181.895C81.86 181.895 57.002 153.669 57.002 111.988C57.002 78.158 78.311 45.075 121.113 45.075C160.366 45.075 185.974 71.429 185.974 114.982ZM121.674 75.54C102.422 75.54 91.58 90.68 91.58 113.856C91.58 134.794 102.98 151.24 120.926 151.24C140.926 151.24 150.272 135.914 150.272 112.548C150.273 87.504 138.31 75.54 121.675 75.54H121.674Z"
        fill="#FCD015"
      />
      <path
        d="M121.266 181.895C112.1 182 103.002 180.298 94.494 176.886C86.7706 173.725 79.8364 168.906 74.182 162.768C68.4289 156.434 64.0264 148.994 61.243 140.903C58.1304 131.811 56.5591 122.263 56.594 112.653H91.182C91.176 113.032 91.172 113.437 91.172 113.853C91.1405 118.819 91.8352 123.762 93.234 128.527C94.4727 132.802 96.4646 136.821 99.116 140.396C101.566 143.701 104.726 146.415 108.362 148.339C112.118 150.277 116.29 151.273 120.517 151.239C125.005 151.325 129.454 150.383 133.523 148.487C137.176 146.693 140.32 144.011 142.668 140.687C145.215 137.003 147.049 132.875 148.074 128.515C149.316 123.321 149.917 117.994 149.864 112.653H185.541C185.558 113.44 185.566 114.224 185.566 114.982C185.567 119.124 185.256 123.26 184.635 127.355C184.017 131.438 183.069 135.463 181.801 139.393C179.33 147.221 175.381 154.503 170.168 160.844C164.743 167.38 157.9 172.594 150.159 176.092C141.054 180.071 131.201 182.05 121.266 181.895Z"
        fill="#FBB500"
      />
      <path
        d="M121.268 184.895C101.013 184.895 83.902 177.875 71.785 164.595C59.885 151.551 53.596 133.361 53.596 111.989C53.596 78.317 74.596 42.076 120.707 42.076C140.953 42.076 158.012 48.842 170.042 61.642C182.161 74.542 188.566 92.982 188.566 114.984C188.566 133.34 182.851 150.309 172.474 162.766C160.413 177.242 142.706 184.895 121.268 184.895ZM120.707 48.075C78.719 48.075 59.596 81.206 59.596 111.988C59.596 152.632 83.803 178.895 121.268 178.895C163.612 178.895 182.568 146.795 182.568 114.983C182.566 73.713 158.863 48.075 120.707 48.075ZM120.52 154.24C101.475 154.24 88.174 137.633 88.174 113.856C88.174 88.371 100.854 72.54 121.268 72.54C141.054 72.54 152.868 87.496 152.868 112.548C152.866 139.044 141.076 154.24 120.52 154.24ZM121.268 78.54C104.302 78.54 94.174 91.74 94.174 113.856C94.174 134.101 105.008 148.24 120.52 148.24C132.539 148.24 146.866 142.048 146.866 112.548C146.866 90.935 137.536 78.54 121.268 78.54Z"
        fill="#FCD015"
      />
    </svg>
  );
};


// Player 1
export const Player1 = ({ className }) => {
  return (
    <svg
      width="233"
      height="233"
      viewBox="0 0 233 233"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M89.632 52.004C89.7806 51.9983 89.9293 52.0149 90.073 52.053C91.029 52.627 106.7 80.721 113.389 96.393H114.537C122.756 81.103 138.427 52.244 139.765 52.053C139.795 52.0513 139.824 52.0513 139.854 52.053C142.554 52.053 170.154 59.538 170.343 61.803C170.535 64.288 140.529 117.228 139.191 119.139C146.454 131.179 173.019 178.195 172.829 179.533C172.285 180.985 148.123 189.161 140.292 189.161C139.924 189.164 139.556 189.14 139.192 189.089C138.046 188.706 122.374 160.038 114.347 144.367H113.2C105.364 160.038 89.883 188.706 88.928 188.706C88.3791 188.793 87.8238 188.834 87.268 188.826C78.874 188.826 56.411 182.291 56.056 180.871C55.674 179.533 81.6661 131.944 89.5021 119.139C88.3541 117.419 58.923 64.479 59.114 61.994C59.114 59.801 85.358 52.007 89.634 52.007L89.632 52.004ZM89.634 40.007C84.95 40.007 74.811 42.964 69.183 44.727C66.296 45.627 62.135 47.004 58.717 48.41C55.317 49.81 47.435 53.048 47.124 61.474C46.936 65.125 48.157 67.915 52.952 77.224C55.479 82.13 58.952 88.643 63.262 96.582C66.928 103.329 72.085 112.7 75.63 119.027C70.938 127.137 64.45 138.833 59.155 148.573C55.196 155.854 51.808 162.209 49.355 166.954C44.698 175.967 43.101 179.054 44.476 184.029C46.254 190.6 52.269 192.737 55.882 194.021C58.489 194.947 61.911 195.993 65.517 196.966C70.857 198.408 80.783 200.826 87.265 200.826C88.3051 200.832 89.3443 200.765 90.375 200.626C96.089 199.967 98.975 195.526 99.975 193.992C100.606 193.022 101.394 191.724 102.384 190.024C104.078 187.118 106.371 183.013 109.016 178.154C110.597 175.254 112.236 172.203 113.861 169.149C115.539 172.249 117.224 175.34 118.837 178.263C121.537 183.157 123.878 187.293 125.604 190.228C128.789 195.644 130.71 198.913 135.384 200.473L136.366 200.801L137.388 200.956C138.348 201.098 139.318 201.167 140.288 201.163C146.275 201.163 155.88 198.541 162.883 196.342C166.627 195.166 170.223 193.915 173.011 192.817C177.011 191.241 181.988 189.281 184.062 183.747L184.52 182.523L184.705 181.23C185.33 176.848 184.039 174.452 179.236 165.536C176.783 160.984 173.336 154.742 169.269 147.484C163.449 137.101 157.351 126.406 153.105 119.116C157.127 112.101 162.955 101.695 165.832 96.508C170.226 88.584 173.769 82.063 176.365 77.125C181.447 67.45 182.605 64.791 182.304 60.883V60.847V60.81C181.614 52.51 173.895 49.549 170.185 48.123C166.738 46.799 162.449 45.463 159.457 44.576C153.766 42.887 143.657 40.055 139.857 40.055C139.462 40.055 139.065 40.073 138.679 40.108L138.373 40.135L138.073 40.179C131.954 41.054 129.258 45.54 126.136 50.735C124.427 53.579 122.114 57.608 119.263 62.713C117.748 65.424 116.156 68.303 114.563 71.213C112.894 67.994 111.356 65.105 110.163 62.881C107.796 58.481 105.463 54.274 103.587 51.028C100.64 45.922 99.295 43.591 96.267 41.773L95.133 41.092L93.879 40.674C92.5139 40.2241 91.0844 40.0001 89.647 40.011L89.634 40.007Z"
        fill="black"
      />
      <path
        d="M94.637 43.997C94.7853 43.9912 94.9336 44.0078 95.077 44.046C96.034 44.62 111.705 72.714 118.394 88.386H119.537C127.754 73.096 143.426 44.238 144.764 44.046C144.794 44.0444 144.824 44.0444 144.854 44.046C147.554 44.046 175.154 51.531 175.344 53.796C175.536 56.282 145.529 109.221 144.191 111.132C151.454 123.172 178.02 170.188 177.829 171.526C177.284 172.978 153.122 181.154 145.292 181.154C144.924 181.157 144.556 181.133 144.192 181.082C143.046 180.7 127.374 152.032 119.347 136.36H118.2C110.364 152.032 94.883 180.7 93.927 180.7C93.3781 180.787 92.8227 180.826 92.267 180.819C83.874 180.819 61.411 174.285 61.056 172.864C60.673 171.526 86.6661 123.937 94.5021 111.132C93.3541 109.413 63.921 56.472 64.113 53.987C64.113 51.794 90.357 44 94.634 44L94.637 43.997ZM94.634 32C89.95 32 79.81 34.957 74.183 36.72C71.295 37.62 67.135 38.997 63.717 40.403C60.317 41.803 52.435 45.041 52.123 53.467C51.935 57.119 53.156 59.909 57.951 69.217C60.478 74.123 63.951 80.636 68.261 88.576C71.927 95.322 77.085 104.693 80.629 111.02C75.937 119.13 69.449 130.827 64.154 140.566C60.195 147.847 56.808 154.203 54.354 158.947C49.698 167.96 48.1 171.047 49.475 176.022C51.252 182.593 57.269 184.73 60.881 186.014C63.489 186.94 66.911 187.986 70.516 188.959C75.856 190.401 85.782 192.819 92.264 192.819C93.3044 192.825 94.3439 192.758 95.375 192.619C101.088 191.959 103.975 187.519 104.975 185.984C105.606 185.014 106.393 183.716 107.383 182.016C109.077 179.11 111.37 175.005 114.016 170.146C115.596 167.246 117.236 164.195 118.861 161.141C120.538 164.241 122.223 167.332 123.837 170.255C126.537 175.149 128.878 179.286 130.604 182.22C133.788 187.636 135.704 190.905 140.384 192.465L141.366 192.793L142.387 192.948C143.347 193.09 144.317 193.159 145.287 193.155C151.273 193.155 160.878 190.534 167.882 188.334C171.624 187.159 175.222 185.907 178.009 184.809C182.009 183.233 186.986 181.273 189.06 175.739L189.519 174.515L189.703 173.222C190.328 168.84 189.037 166.444 184.234 157.528C181.783 152.976 178.334 146.734 174.267 139.476C168.449 129.093 162.349 118.398 158.105 111.108C162.126 104.093 167.955 93.687 170.83 88.5C175.224 80.577 178.769 74.055 181.363 69.118C186.447 59.442 187.605 56.784 187.302 52.875V52.839V52.802C186.613 44.502 178.894 41.541 175.185 40.116C171.736 38.791 167.447 37.456 164.457 36.568C158.765 34.879 148.651 32.047 144.857 32.047C144.457 32.047 144.064 32.065 143.679 32.1L143.373 32.127L143.073 32.171C136.954 33.046 134.259 37.533 131.136 42.727C129.428 45.571 127.115 49.6 124.262 54.706C122.749 57.416 121.162 60.295 119.562 63.206C117.894 59.986 116.356 57.097 115.162 54.874C112.795 50.474 110.462 46.266 108.586 43.02C105.639 37.92 104.293 35.583 101.266 33.765L100.132 33.084L98.878 32.667C97.513 32.2163 96.0835 31.992 94.646 32.003L94.634 32Z"
        fill="black"
      />
      <path
        d="M115.188 136.356C107.352 152.028 91.872 180.696 90.917 180.696C84.417 181.842 58.426 174.389 58.044 172.86C57.662 171.522 83.653 123.933 91.489 111.128C90.342 109.409 60.911 56.468 61.101 53.983C61.101 51.691 89.769 43.283 92.063 44.045C93.018 44.619 108.69 72.713 115.38 88.385H116.526C124.745 73.095 140.415 44.237 141.753 44.045C143.853 43.855 172.141 51.498 172.333 53.792C172.524 56.278 142.518 109.217 141.18 111.128C148.442 123.168 175.008 170.184 174.817 171.522C174.245 173.051 147.487 182.034 141.18 181.078C140.034 180.696 124.362 152.028 116.335 136.356H115.188Z"
        fill="#FCD015"
      />
      <path
        d="M141.677 181.078C140.531 180.696 124.859 152.028 116.837 136.356H115.685C107.849 152.028 92.369 180.696 91.414 180.696C85.631 181.716 64.405 175.924 59.537 173.56V170.37C64.32 160.27 84.919 122.715 91.883 111.297H141.783C149.189 123.603 175.508 170.19 175.319 171.521C174.775 172.973 150.619 181.147 142.783 181.148C142.413 181.152 142.043 181.129 141.677 181.078Z"
        fill="#FBB500"
      />
      <path
        d="M145.206 184.141C144.713 184.144 144.22 184.11 143.731 184.041L143.231 183.92C141.872 183.466 141.309 183.278 131.713 165.897C127.4 158.086 122.574 149.091 118.786 141.821C115.127 148.991 110.399 157.951 106.108 165.833C96.758 183.005 96.095 183.665 94.157 183.69C89.579 184.334 79.88 182.096 74.434 180.681C58.901 176.646 58.494 175.02 58.134 173.581C57.734 172.202 57.547 171.529 72.05 144.854C79.489 131.171 87.02 117.762 91.001 111.095C88.538 106.785 82.108 95.217 76.159 84.268C61.195 56.73 61.019 55.019 61.106 53.812C61.1566 53.2079 61.3481 52.624 61.6653 52.1074C61.9824 51.5907 62.4162 51.1556 62.932 50.837C66.646 48.159 92.084 39.884 96.012 41.192L96.326 41.292L96.61 41.463C97.257 41.852 98.235 42.44 107.21 59.12C109.615 63.587 115.056 73.853 119.151 82.737C141.379 41.485 142.326 41.35 144.326 41.064L144.48 41.046C147.606 40.769 173.112 47.806 176.916 51C177.309 51.3053 177.635 51.6872 177.876 52.1224C178.116 52.5576 178.266 53.0372 178.316 53.532C178.416 54.783 178.516 56.057 162.948 84.119C156.802 95.202 150.233 106.776 147.675 111.124C151.625 117.778 159.351 131.277 166.405 143.86C181.057 170.003 180.97 170.608 180.781 171.936L180.735 172.258L180.621 172.558C180.187 173.718 179.593 175.306 164.021 180.085C158.886 181.679 150.081 184.141 145.206 184.141ZM116.337 133.356H121.172L122.008 134.988C129.977 150.545 142.508 173.347 145.688 178.161C151.446 178.011 168.169 172.747 173.995 170.261C169.286 160.951 148.902 124.761 141.614 112.676L140.606 111.005L141.726 109.405C143.415 106.877 167.385 64.482 171.756 54.891C166.738 52.62 151.025 48.165 145.991 47.215C143.639 50.705 136.431 63.276 122.172 89.803L121.322 91.383H116.401L115.623 89.561C109.559 75.352 96.874 52.44 93.551 47.096C88.607 47.849 72.613 52.607 67.642 55.015C71.827 64.396 95.47 107.083 96.998 109.479L98.007 111.059L97.051 112.692C89.951 124.302 69.351 161.992 64.812 171.502C70.538 173.702 86.698 177.914 92.393 177.825C95.531 173.047 108.178 149.671 115.508 135.012L116.337 133.356Z"
        fill="#FCD015"
      />
      <path
        d="M48.86 55.603L53.987 47.398L58.317 55.034C58.317 55.034 55.708 60.805 55.47 60.963C55.232 61.121 48.86 55.603 48.86 55.603Z"
        fill="black"
      />
      <path
        d="M188.374 177.263L182.518 186.634L174.991 181.155L182.56 171.386L188.374 177.263Z"
        fill="black"
      />
    </svg>
  );
};

// Player 2
export const Player2 = ({ className }) => {
  return (
    <svg
      width="233"
      height="233"
      viewBox="0 0 233 233"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M177.009 55.4C163.235 40.744 143.909 33 121.116 33C104.039 33 88.929 37.589 76.581 46.364C68.2751 50.5279 60.8946 56.3245 54.881 63.407C42.705 77.66 36 96.816 36 117.345C36 166.336 66.813 199.252 112.674 199.252C130.182 199.252 145.527 194.636 157.92 185.809C166.339 181.605 173.79 175.692 179.796 168.447C191.518 154.376 197.974 135.361 197.974 114.904C197.976 90.57 190.726 69.994 177.009 55.4ZM121.677 181.817C81.863 181.817 57.005 153.591 57.005 111.91C57.005 90.51 65.541 69.425 82.638 56.81C91.8473 52.465 101.928 50.2834 112.11 50.432C151.362 50.432 176.97 76.785 176.97 120.339C176.97 141.352 169.037 162.654 151.811 175.41C143.428 179.459 133.427 181.817 121.677 181.817Z"
        fill="black"
      />
      <path
        d="M121.677 75.462C113.821 75.462 107.367 77.985 102.477 82.544C89.64 87.049 82.577 100.511 82.577 119.21C82.577 140.147 93.977 156.594 111.921 156.594C119.967 156.594 126.286 154.109 130.969 149.622C144.069 145.193 150.269 131.499 150.269 112.47C150.276 87.426 138.312 75.462 121.677 75.462ZM120.929 139.162C109.011 139.162 103.583 126.004 103.583 113.778C103.583 105.033 105.483 97.734 108.939 93.225V93.22C110.17 92.9995 111.418 92.8903 112.669 92.894C123.683 92.894 129.269 101.308 129.269 117.901C129.269 128.707 127.204 135.137 124.43 138.964C123.269 139.116 122.099 139.182 120.929 139.162Z"
        fill="black"
      />
      <path
        d="M185.974 114.982C185.974 148.064 166.347 181.895 121.674 181.895C81.86 181.895 57.002 153.669 57.002 111.988C57.002 78.158 78.311 45.075 121.113 45.075C160.366 45.075 185.974 71.429 185.974 114.982ZM121.674 75.54C102.422 75.54 91.58 90.68 91.58 113.856C91.58 134.794 102.98 151.24 120.926 151.24C140.926 151.24 150.272 135.914 150.272 112.548C150.273 87.504 138.31 75.54 121.675 75.54H121.674Z"
        fill="#FCD015"
      />
      <path
        d="M121.266 181.895C112.1 182 103.002 180.298 94.494 176.886C86.7706 173.725 79.8364 168.906 74.182 162.768C68.4289 156.434 64.0264 148.994 61.243 140.903C58.1304 131.811 56.5591 122.263 56.594 112.653H91.182C91.176 113.032 91.172 113.437 91.172 113.853C91.1405 118.819 91.8352 123.762 93.234 128.527C94.4727 132.802 96.4646 136.821 99.116 140.396C101.566 143.701 104.726 146.415 108.362 148.339C112.118 150.277 116.29 151.273 120.517 151.239C125.005 151.325 129.454 150.383 133.523 148.487C137.176 146.693 140.32 144.011 142.668 140.687C145.215 137.003 147.049 132.875 148.074 128.515C149.316 123.321 149.917 117.994 149.864 112.653H185.541C185.558 113.44 185.566 114.224 185.566 114.982C185.567 119.124 185.256 123.26 184.635 127.355C184.017 131.438 183.069 135.463 181.801 139.393C179.33 147.221 175.381 154.503 170.168 160.844C164.743 167.38 157.9 172.594 150.159 176.092C141.054 180.071 131.201 182.05 121.266 181.895Z"
        fill="#FBB500"
      />
      <path
        d="M121.268 184.895C101.013 184.895 83.902 177.875 71.785 164.595C59.885 151.551 53.596 133.361 53.596 111.989C53.596 78.317 74.596 42.076 120.707 42.076C140.953 42.076 158.012 48.842 170.042 61.642C182.161 74.542 188.566 92.982 188.566 114.984C188.566 133.34 182.851 150.309 172.474 162.766C160.413 177.242 142.706 184.895 121.268 184.895ZM120.707 48.075C78.719 48.075 59.596 81.206 59.596 111.988C59.596 152.632 83.803 178.895 121.268 178.895C163.612 178.895 182.568 146.795 182.568 114.983C182.566 73.713 158.863 48.075 120.707 48.075ZM120.52 154.24C101.475 154.24 88.174 137.633 88.174 113.856C88.174 88.371 100.854 72.54 121.268 72.54C141.054 72.54 152.868 87.496 152.868 112.548C152.866 139.044 141.076 154.24 120.52 154.24ZM121.268 78.54C104.302 78.54 94.174 91.74 94.174 113.856C94.174 134.101 105.008 148.24 120.52 148.24C132.539 148.24 146.866 142.048 146.866 112.548C146.866 90.935 137.536 78.54 121.268 78.54Z"
        fill="#FCD015"
      />
    </svg>
  );
};