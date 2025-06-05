import axios from "axios";

export const BrncKor = () => {
  return (
    <div class="mt-4">
      <div>
        <h5 class="sector-title">국내 원자력 관련 법령 체계도</h5>
        <div class="row">
          <div class="col-lg-6">
            <img src="assets/images/brnc/kor_laws.png" alt="Image" class="laws" />
          </div>
          <div class="col-lg-6">
            <ul class="summary">
              <li>국내는 원자력 및 방사선 이용의 안전을 위한 국내 원자력안전법령은 원자력이용시설의 유형별로 허가의 절차 및 기준과 운영상의 규제요건들을 열거하고 있다.</li>
              <li>심층처분시설에 대해서는 원자력안전위원회 규칙 제31호 ‘방사선안전관리등의 기술기준에 관한 규칙’과 원자력안전위원회 고시 ‘고준위방사성폐기물 심층처분시설에 관한 일반기준’ 등의 행정규칙 수준의 기술기준을 제시하고 있다.</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-4 pt-3">
        <h5 class="sector-title">국내 심층처분 관련 주요 규제요건</h5>
        <table class="table table-bordered mb-0" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th class="bg-light" style={{ width: "10%" }}>분류</th>
              <th class="bg-light" style={{ width: "40%" }}>명칭</th>
              <th class="bg-light" style={{ width: "50%" }}>주요내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center" rowspan="3" style={{ width: "10%" }}>법령</td>
              <td>
                <a class="text-muted" href='https://www.law.go.kr/LSW/lsSc.do?dt=20201211&subMenuId=15&menuId=1&query=%EC%9B%90%EC%9E%90%EB%A0%A5%EC%95%88%EC%A0%84%EB%B2%95#undefined' target='_blank' rel='noopener noreferrer'>원자력안전법</a>
              </td>
              <td>TBD</td>
            </tr>
            <tr>
              <td>
                <a class="text-muted" href='https://www.law.go.kr/LSW/lsSc.do?dt=20201211&subMenuId=15&menuId=1&query=%EC%9B%90%EC%9E%90%EB%A0%A5%EC%95%88%EC%A0%84%EB%B2%95#undefined' target='_blank' rel='noopener noreferrer'>원자력안전법 시행령</a>
              </td>
              <td>TBD</td>
            </tr>
            <tr>
              <td>
                <a class="text-muted" href='https://www.law.go.kr/LSW/lsSc.do?dt=20201211&subMenuId=15&menuId=1&query=%EC%9B%90%EC%9E%90%EB%A0%A5%EC%95%88%EC%A0%84%EB%B2%95#undefined' target='_blank' rel='noopener noreferrer'>원자력안전법 시행규칙</a>
              </td>
              <td>TBD</td>
            </tr>
            <tr>
              <td class="text-center" rowspan="2" style={{ width: "10%" }}>행정규칙</td>
              <td>
                <a class="text-muted" href='https://www.law.go.kr/admRulSc.do?menuId=5&subMenuId=41&tabMenuId=183&query=%EB%B0%A9%EC%82%AC%EC%84%A0%20%EC%95%88%EC%A0%84%EA%B4%80%EB%A6%AC%20%EB%93%B1%EC%9D%98#liBgcolor0' target='_blank' rel='noopener noreferrer'>방사선 안전관리 등의 기술기준에 관한 규칙</a>
              </td>
              <td>TBD</td>
            </tr>
            <tr>
              <td>
                <a class="text-muted" href='https://www.law.go.kr/admRulSc.do?menuId=5&subMenuId=41&tabMenuId=183&query=%EA%B3%A0%EC%A4%80%EC%9C%84#liBgcolor0' target='_blank' rel='noopener noreferrer'>고준위방사성폐기물 심층처분시설에 관한 일반기준</a>
              </td>
              <td>TBD</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-4 pt-3">
        <h5 class="sector-title">국내 심층처분시스템 개발 주요 연혁</h5>
        <ul>
          <li>`16년, 제1차 고준위방사성폐기물 관리 기본계획 수립</li>
          <li>`21년, 제2차 고준위방사성폐기물 관리 기본계획(안) 수립</li>
          <li>부지선정절차 착수 후, 37년 내 심층처분시설을 확보하는 것을 목표로 하고 있음</li>
          <li>
            <ul>
              <li>(Y) 부지선정절차 착수 </li>
              <li>(Y+13) 관리시설 부지확보</li>
              <li>(Y+20) 중간저장시설 확보</li>
              <li>(Y+37) 심층처분시설 확보</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}