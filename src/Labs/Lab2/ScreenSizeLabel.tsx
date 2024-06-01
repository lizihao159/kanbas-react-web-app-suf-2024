export default function ScreenSizeLabel() {
    return (
      <div id="wd-screen-size-label" className="position-fixed top-0 left-0 bg-black text-white p-2 fa-2x">
        <div className="d-block d-sm-none">
          XS - Extra Small (&lt;576px)
        </div>
        <div className="d-none d-sm-block d-md-none">
          S - Small (≥576px)
        </div>
        <div className="d-none d-md-block d-lg-none">
          M - Medium (≥768px)
        </div>
        <div className="d-none d-lg-block d-xl-none">
          L - Large (≥992px)
        </div>
        <div className="d-none d-xl-block d-xxl-none">
          XL - Extra Large (≥1200px)
        </div>
        <div className="d-none d-xxl-block">
          XXL - Extra Extra Large (≥1400px)
        </div>
      </div>
    );
  }
  