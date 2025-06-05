import axios from "axios";

export const BrncFra = () => {
  return (
    <div class="mt-4">
      <div>
        <h5 class="sector-title">프랑스 원자력 관련 법령 체계도</h5>
        <div class="row">
          <div class="col-lg-6">
            <img src="assets/images/brnc/fra_laws.png" alt="Image" class="laws" />
          </div>
          <div class="col-lg-6">
            <ul class="summary">
              <li>프랑스 규제기관인 원자력안전청 (ASN)은 원자력분야 투명성 및 보안에 관한 법 (TSN Act)에 따라 원자력활동 규제 및 감독을 수행한다.
                심층처분시설은 프랑스 환경법에 따라 기본원자력시설 (BNI)로 분류 및 관리되며, 원자력안전청은 BNI에 대한 기본안전규칙 (RFS)를 발간한다.
                RFS는 법적 강제성은 없으나, 시설운영자가 RFS 제안사항을 충족하지 못하는 경우, 대안을 제시하여 시설이 안전 목적을 달성함을 입증해야 하며, RFS는 점차적으로 ASN Guide 문서로 대체되고 있다. </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-4 pt-3">
        <h5 class="sector-title">프랑스 심층처분 관련 주요 규제요건</h5>
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
              <td class="text-center" rowspan="3" style={{ width: "10%" }}>법</td>
              <td>원자력분야 투명성 및 보안에 관한 법</td>
              <td>
                <li>규제기관(ASN)의 설립 근거</li>
                <li>기본원자력시설(BNI)의 시설 운영주기별(운영,시설변경,폐쇄,해체) 안전규제요건</li>
              </td>
            </tr>
            <tr>
              <td>방사성물질 및 폐기물의 지속가능한 관리에 관한 법</td>
              <td>방사선학적 영향으로부터 인간 및 환경을 보호하기 위한 방사성물질 및 방폐물 관리 요건</td>
            </tr>
            <tr>
              <td>환경법</td>
              <td>
                <li>다양한 종류의 폐기물로부터 환경을 보호하기 위한 요건</li>
                <li>기본원자력시설(BNI)의 부지선정을 위한 공청회는 환경법에 따라 수행</li>
                <li>방사성물질 및 방폐물로부터 환경을 보호하기 위한 조항을 별도로 규정</li>
              </td>
            </tr>
            <tr>
              <td class="text-center" style={{ width: "10%" }}>STUK규정</td>
              <td colspan="3">
                <li>지질학 및 지반공학적 부지 연구; 토양 특성 결정 및 토양 거동에 관한 연구</li>
                <li>원자로를 제외한 기본원자력시설 내 환기계통의 설계 및 운영</li>
                <li>방사성물질 운반시 방사선 방호</li>
                <li>기본원자력시설의 중대 안전, 방사선방호, 환경사고와 관련된 보고 및 코드화 절차에 대한 지침</li>
                <li>방사성폐기물의 심지층 최종 처분에 관한 안전 지침</li>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-4 pt-3">
      <h5 class="sector-title">프랑스 심층처분시스템 개발 주요 연혁</h5>
        <ul>
          <li>`76년, 라하그 지역에 중간저장시설 확보 및 지속 운영</li>
          <li>`87년, 처분시설 부지확보 착수</li>
          <li>`10년 뫼즈·오트마른 경계를 부지로 결정</li>
          <li>`22년, 현재 건설허가 신청 준비중</li>
        </ul>
        <div class="text-center">
          <img src="assets/images/brnc/fra_site.png" alt="Image" class="laws" />
        </div>
      </div>
    </div>
  )
}
