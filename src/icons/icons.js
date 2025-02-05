import React from "react";

//Board cell
export const Board = ({ className , color = "#C9F9FC" }) => {
  return (
    <svg
      width="224"
      height="223"
      viewBox="0 0 224 223"
      fill="none"
      className={className}
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
    <svg width="146" height="170" viewBox="0 0 146 170" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M45.632 20.004C45.7806 19.9983 45.9293 20.0149 46.073 20.053C47.029 20.627 62.7 48.721 69.389 64.393H70.537C78.756 49.103 94.4271 20.244 95.7651 20.053C95.7947 20.0513 95.8244 20.0513 95.854 20.053C98.554 20.053 126.154 27.538 126.343 29.803C126.535 32.288 96.529 85.228 95.191 87.139C102.454 99.179 129.019 146.195 128.829 147.533C128.285 148.985 104.123 157.161 96.292 157.161C95.9241 157.164 95.5565 157.14 95.1921 157.089C94.0461 156.706 78.374 128.038 70.347 112.367H69.2001C61.3641 128.038 45.883 156.706 44.928 156.706C44.3791 156.793 43.8238 156.834 43.268 156.826C34.874 156.826 12.411 150.291 12.056 148.871C11.674 147.533 37.6661 99.944 45.5021 87.139C44.3541 85.419 14.923 32.479 15.114 29.994C15.114 27.801 41.358 20.007 45.634 20.007L45.632 20.004ZM45.634 8.00702C40.95 8.00702 30.811 10.964 25.183 12.727C22.296 13.627 18.135 15.004 14.717 16.41C11.317 17.81 3.43504 21.048 3.12404 29.474C2.93604 33.125 4.15704 35.915 8.95204 45.224C11.479 50.13 14.952 56.643 19.262 64.582C22.928 71.329 28.085 80.7 31.63 87.027C26.938 95.137 20.45 106.833 15.155 116.573C11.196 123.854 7.80802 130.209 5.35502 134.954C0.698023 143.967 -0.898974 147.054 0.476026 152.029C2.25403 158.6 8.26903 160.737 11.882 162.021C14.489 162.947 17.911 163.993 21.517 164.966C26.857 166.408 36.783 168.826 43.265 168.826C44.3051 168.832 45.3443 168.765 46.375 168.626C52.089 167.967 54.975 163.526 55.975 161.992C56.606 161.022 57.394 159.724 58.384 158.024C60.078 155.118 62.371 151.013 65.016 146.154C66.597 143.254 68.236 140.203 69.861 137.149C71.539 140.249 73.224 143.34 74.837 146.263C77.537 151.157 79.8781 155.293 81.604 158.228C84.789 163.644 86.71 166.913 91.384 168.473L92.366 168.801L93.388 168.956C94.3481 169.098 95.3175 169.167 96.288 169.163C102.275 169.163 111.88 166.541 118.883 164.342C122.627 163.166 126.223 161.915 129.011 160.817C133.011 159.241 137.988 157.281 140.062 151.747L140.52 150.523L140.705 149.23C141.33 144.848 140.039 142.452 135.236 133.536C132.783 128.984 129.336 122.742 125.269 115.484C119.449 105.101 113.351 94.406 109.105 87.116C113.127 80.101 118.955 69.695 121.832 64.508C126.226 56.584 129.769 50.063 132.365 45.125C137.447 35.45 138.605 32.791 138.304 28.883V28.847V28.81C137.614 20.51 129.895 17.549 126.185 16.123C122.738 14.799 118.449 13.463 115.457 12.576C109.766 10.887 99.657 8.05499 95.857 8.05499C95.462 8.05499 95.0651 8.07297 94.6791 8.10797L94.373 8.13501L94.073 8.17902C87.954 9.05402 85.258 13.54 82.136 18.735C80.427 21.579 78.114 25.608 75.263 30.713C73.748 33.424 72.156 36.303 70.563 39.213C68.894 35.994 67.356 33.105 66.163 30.881C63.796 26.481 61.463 22.274 59.587 19.028C56.64 13.922 55.295 11.591 52.267 9.77301L51.133 9.09198L49.879 8.67401C48.5139 8.22407 47.0844 8.00009 45.647 8.01099L45.634 8.00702Z" fill="black"/>
    <path d="M50.637 11.997C50.7853 11.9912 50.9336 12.0078 51.077 12.046C52.034 12.62 67.705 40.714 74.394 56.386H75.537C83.754 41.096 99.426 12.238 100.764 12.046C100.794 12.0444 100.824 12.0444 100.854 12.046C103.554 12.046 131.154 19.531 131.344 21.796C131.536 24.282 101.529 77.221 100.191 79.132C107.454 91.172 134.02 138.188 133.829 139.526C133.284 140.978 109.122 149.154 101.292 149.154C100.924 149.157 100.556 149.133 100.192 149.082C99.0461 148.7 83.374 120.032 75.347 104.36H74.2001C66.3641 120.032 50.883 148.7 49.927 148.7C49.3781 148.787 48.8227 148.826 48.267 148.819C39.874 148.819 17.411 142.285 17.056 140.864C16.673 139.526 42.6661 91.937 50.5021 79.132C49.3541 77.413 19.921 24.472 20.113 21.987C20.113 19.794 46.357 12 50.634 12L50.637 11.997ZM50.634 0C45.95 0 35.81 2.95697 30.183 4.71997C27.295 5.61997 23.135 6.99701 19.717 8.40302C16.317 9.80301 8.43503 13.041 8.12303 21.467C7.93503 25.119 9.15603 27.909 13.951 37.217C16.478 42.123 19.951 48.636 24.261 56.576C27.927 63.322 33.085 72.693 36.629 79.02C31.937 87.13 25.449 98.827 20.154 108.566C16.195 115.847 12.808 122.203 10.354 126.947C5.69802 135.96 4.10002 139.047 5.47502 144.022C7.25202 150.593 13.269 152.73 16.881 154.014C19.489 154.94 22.911 155.986 26.516 156.959C31.856 158.401 41.782 160.819 48.264 160.819C49.3044 160.825 50.3439 160.758 51.375 160.619C57.088 159.959 59.975 155.519 60.975 153.984C61.606 153.014 62.393 151.716 63.383 150.016C65.077 147.11 67.37 143.005 70.016 138.146C71.596 135.246 73.236 132.195 74.861 129.141C76.538 132.241 78.223 135.332 79.837 138.255C82.537 143.149 84.8781 147.286 86.604 150.22C89.788 155.636 91.704 158.905 96.384 160.465L97.366 160.793L98.387 160.948C99.3471 161.09 100.317 161.159 101.287 161.155C107.273 161.155 116.878 158.534 123.882 156.334C127.624 155.159 131.222 153.907 134.009 152.809C138.009 151.233 142.986 149.273 145.06 143.739L145.519 142.515L145.703 141.222C146.328 136.84 145.037 134.444 140.234 125.528C137.783 120.976 134.334 114.734 130.267 107.476C124.449 97.093 118.349 86.398 114.105 79.108C118.126 72.093 123.955 61.687 126.83 56.5C131.224 48.577 134.769 42.055 137.363 37.118C142.447 27.442 143.605 24.784 143.302 20.875V20.839V20.802C142.613 12.502 134.894 9.54097 131.185 8.11597C127.736 6.79097 123.447 5.45599 120.457 4.56799C114.765 2.87899 104.651 0.0469971 100.857 0.0469971C100.457 0.0469971 100.064 0.0649756 99.6791 0.0999756L99.373 0.127014L99.073 0.171021C92.954 1.04602 90.259 5.53299 87.136 10.727C85.428 13.571 83.115 17.6 80.262 22.706C78.749 25.416 77.1621 28.295 75.5621 31.206C73.8941 27.986 72.356 25.097 71.162 22.874C68.795 18.474 66.462 14.266 64.586 11.02C61.639 5.92002 60.293 3.58301 57.266 1.76501L56.132 1.08398L54.878 0.666992C53.513 0.21634 52.0835 -0.00795678 50.646 0.00299072L50.634 0Z" fill="black"/>
    <path d="M71.188 104.356C63.352 120.028 47.872 148.696 46.917 148.696C40.417 149.842 14.426 142.389 14.044 140.86C13.662 139.522 39.653 91.933 47.489 79.128C46.342 77.409 16.911 24.468 17.101 21.983C17.101 19.691 45.769 11.283 48.063 12.045C49.018 12.619 64.69 40.713 71.38 56.385H72.526C80.745 41.095 96.415 12.237 97.753 12.045C99.853 11.855 128.141 19.498 128.333 21.792C128.524 24.278 98.518 77.217 97.18 79.128C104.442 91.168 131.008 138.184 130.817 139.522C130.245 141.051 103.487 150.034 97.18 149.078C96.034 148.696 80.362 120.028 72.335 104.356H71.188Z" fill="#FCD015"/>
    <path d="M97.677 149.078C96.531 148.696 80.859 120.028 72.837 104.356H71.685C63.849 120.028 48.369 148.696 47.414 148.696C41.631 149.716 20.405 143.924 15.537 141.56V138.37C20.32 128.27 40.919 90.715 47.883 79.297H97.783C105.189 91.603 131.508 138.19 131.319 139.521C130.775 140.973 106.619 149.147 98.783 149.148C98.4131 149.152 98.0434 149.129 97.677 149.078Z" fill="#FBB500"/>
    <path d="M101.206 152.141C100.713 152.144 100.22 152.11 99.731 152.041L99.231 151.92C97.872 151.466 97.3091 151.278 87.7131 133.897C83.4 126.086 78.574 117.091 74.786 109.821C71.127 116.991 66.399 125.951 62.108 133.833C52.758 151.005 52.095 151.665 50.157 151.69C45.579 152.334 35.88 150.096 30.434 148.681C14.901 144.646 14.494 143.02 14.134 141.581C13.734 140.202 13.547 139.529 28.05 112.854C35.489 99.171 43.02 85.762 47.001 79.095C44.538 74.785 38.108 63.217 32.159 52.268C17.195 24.73 17.019 23.019 17.106 21.812C17.1566 21.2079 17.3481 20.624 17.6653 20.1074C17.9824 19.5907 18.4162 19.1556 18.932 18.837C22.646 16.159 48.084 7.88403 52.012 9.19203L52.326 9.292L52.61 9.46302C53.257 9.85202 54.235 10.44 63.21 27.12C65.615 31.587 71.056 41.853 75.151 50.737C97.379 9.48501 98.326 9.35004 100.326 9.06404L100.48 9.04603C103.606 8.76903 129.112 15.806 132.916 19C133.309 19.3053 133.635 19.6872 133.876 20.1224C134.116 20.5576 134.266 21.0372 134.316 21.532C134.416 22.783 134.516 24.057 118.948 52.119C112.802 63.202 106.233 74.776 103.675 79.124C107.625 85.778 115.351 99.277 122.405 111.86C137.057 138.003 136.97 138.608 136.781 139.936L136.735 140.258L136.621 140.558C136.187 141.718 135.593 143.306 120.021 148.085C114.886 149.679 106.081 152.141 101.206 152.141ZM72.337 101.356H77.172L78.008 102.988C85.977 118.545 98.508 141.347 101.688 146.161C107.446 146.011 124.169 140.747 129.995 138.261C125.286 128.951 104.902 92.761 97.6141 80.676L96.606 79.005L97.7261 77.405C99.4151 74.877 123.385 32.482 127.756 22.891C122.738 20.62 107.025 16.165 101.991 15.215C99.639 18.705 92.431 31.276 78.172 57.803L77.322 59.383H72.401L71.623 57.561C65.559 43.352 52.874 20.44 49.551 15.096C44.607 15.849 28.613 20.607 23.642 23.015C27.827 32.396 51.47 75.083 52.998 77.479L54.007 79.059L53.051 80.692C45.951 92.302 25.351 129.992 20.812 139.502C26.538 141.702 42.698 145.914 48.393 145.825C51.531 141.047 64.178 117.671 71.508 103.012L72.337 101.356Z" fill="#FCD015"/>
    <path d="M4.86002 23.603L9.98703 15.398L14.317 23.034C14.317 23.034 11.708 28.805 11.47 28.963C11.232 29.121 4.86002 23.603 4.86002 23.603Z" fill="black"/>
    <path d="M144.374 145.263L138.518 154.634L130.991 149.155L138.56 139.386L144.374 145.263Z" fill="black"/>
    </svg>
    
  );
};

// Player O
export const O = ({ className  }) => {
  return (
    <svg
      className={className}
      width="162"
      height="167"
      viewBox="0 0 162 167"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M141.009 22.4C127.235 7.74402 107.909 0 85.116 0C68.039 0 52.929 4.58901 40.581 13.364C32.2751 17.5279 24.8946 23.3245 18.881 30.407C6.705 44.66 0 63.816 0 84.345C0 133.336 30.813 166.252 76.674 166.252C94.182 166.252 109.527 161.636 121.92 152.809C130.339 148.605 137.79 142.692 143.796 135.447C155.518 121.376 161.974 102.361 161.974 81.904C161.976 57.57 154.726 36.994 141.009 22.4ZM85.677 148.817C45.863 148.817 21.005 120.591 21.005 78.91C21.005 57.51 29.541 36.425 46.638 23.81C55.8473 19.465 65.9282 17.2834 76.11 17.432C115.362 17.432 140.97 43.785 140.97 87.339C140.97 108.352 133.037 129.654 115.811 142.41C107.428 146.459 97.427 148.817 85.677 148.817Z"
        fill="black"
      />
      <path
        d="M85.677 42.462C77.821 42.462 71.367 44.985 66.477 49.544C53.64 54.049 46.577 67.511 46.577 86.21C46.577 107.147 57.977 123.594 75.921 123.594C83.967 123.594 90.286 121.109 94.969 116.622C108.069 112.193 114.269 98.499 114.269 79.47C114.276 54.426 102.312 42.462 85.677 42.462ZM84.929 106.162C73.011 106.162 67.583 93.004 67.583 80.778C67.583 72.033 69.483 64.734 72.939 60.225V60.22C74.17 59.9995 75.4184 59.8903 76.669 59.894C87.683 59.894 93.269 68.308 93.269 84.901C93.269 95.707 91.204 102.137 88.43 105.964C87.2694 106.116 86.0993 106.182 84.929 106.162Z"
        fill="black"
      />
      <path
        d="M149.974 81.982C149.974 115.064 130.347 148.895 85.674 148.895C45.86 148.895 21.002 120.669 21.002 78.988C21.002 45.158 42.311 12.075 85.113 12.075C124.366 12.075 149.974 38.429 149.974 81.982ZM85.674 42.54C66.422 42.54 55.58 57.68 55.58 80.856C55.58 101.794 66.98 118.24 84.926 118.24C104.926 118.24 114.272 102.914 114.272 79.548C114.273 54.504 102.31 42.54 85.675 42.54H85.674Z"
        fill="#FCD015"
      />
      <path
        d="M85.266 148.895C76.0996 149 67.0024 147.298 58.494 143.886C50.7706 140.725 43.8364 135.906 38.182 129.768C32.4289 123.434 28.0264 115.994 25.243 107.903C22.1304 98.8111 20.5591 89.2629 20.594 79.653H55.182C55.176 80.032 55.172 80.437 55.172 80.853C55.1405 85.8187 55.8352 90.7623 57.234 95.527C58.4727 99.8019 60.4646 103.821 63.116 107.396C65.5664 110.701 68.7257 113.415 72.362 115.339C76.1185 117.277 80.2901 118.273 84.517 118.239C89.0054 118.325 93.454 117.383 97.523 115.487C101.176 113.693 104.32 111.011 106.668 107.687C109.215 104.003 111.049 99.8747 112.074 95.515C113.316 90.3206 113.917 84.9936 113.864 79.653H149.541C149.558 80.44 149.566 81.224 149.566 81.982C149.567 86.1239 149.256 90.26 148.635 94.355C148.017 98.4376 147.069 102.463 145.801 106.393C143.33 114.221 139.381 121.503 134.168 127.844C128.743 134.38 121.9 139.594 114.159 143.092C105.054 147.071 95.2013 149.05 85.266 148.895Z"
        fill="#FBB500"
      />
      <path
        d="M85.268 151.895C65.013 151.895 47.902 144.875 35.785 131.595C23.885 118.551 17.596 100.361 17.596 78.989C17.596 45.317 38.596 9.07599 84.707 9.07599C104.953 9.07599 122.012 15.842 134.042 28.642C146.161 41.542 152.566 59.982 152.566 81.984C152.566 100.34 146.851 117.309 136.474 129.766C124.413 144.242 106.706 151.895 85.268 151.895ZM84.707 15.075C42.719 15.075 23.596 48.206 23.596 78.988C23.596 119.632 47.803 145.895 85.268 145.895C127.612 145.895 146.568 113.795 146.568 81.983C146.566 40.713 122.863 15.075 84.707 15.075ZM84.52 121.24C65.475 121.24 52.174 104.633 52.174 80.856C52.174 55.371 64.854 39.54 85.268 39.54C105.054 39.54 116.868 54.496 116.868 79.548C116.866 106.044 105.076 121.24 84.52 121.24ZM85.268 45.54C68.302 45.54 58.174 58.74 58.174 80.856C58.174 101.101 69.008 115.24 84.52 115.24C96.539 115.24 110.866 109.048 110.866 79.548C110.866 57.935 101.536 45.54 85.268 45.54Z"
        fill="#FCD015"
      />
    </svg>
  );
};
