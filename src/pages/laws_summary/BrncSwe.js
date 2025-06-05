import axios from "axios";

export const BrncSwe = () => {
  return (
    <div class="mt-4">
      <div>
        <h5 class="sector-title">스웨덴 원자력 관련 법령 체계도</h5>
        <div class="row">
          <div class="col-lg-6">
            <img src="assets/images/brnc/swe_laws.png" alt="Image" class="laws" />
          </div>
          <div class="col-lg-6">
            <ul class="summary">
              <li>스웨덴 원자력안전 규제요건은 5개의 법을 근간으로 하며, 스웨덴 방사선안전청은 원자력 안전 및 방사선 방호와 관련된 규정인 SSMFS (Swedish Radiation Safety Authority Regulatory Code)을 발간 및 지속 개정 중이다.</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-4 pt-3">
        <h5 class="sector-title">스웨덴 심층처분 관련 주요 규제요건</h5>
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
              <td class="text-center" rowspan="5" style={{ width: "10%" }}>법</td>
              <td>원자력활동법</td>
              <td>원자력과 관련된 활동을 규제하는 법령</td>
            </tr>
            <tr>
              <td>방사선방호법</td>
              <td>인간 및 환경을 방사선에 의한 영향으로부터 보호하기 위한 규제요건</td>
            </tr>
            <tr>
              <td>환경법</td>
              <td>원자력 및 방사선 관련 활동으로 인한 영향으로부터 환경을 보호하기 위한 규제요건</td>
            </tr>
            <tr>
              <td>원자력활동으로 인해 발생하는 잔류물 관리를 위한 기금에 관한 법</td>
              <td>원자력활동으로 발생하는 사용후핵연료 및 원자력폐기물 등의 관리를 위한 기금 조성에 관한 규정</td>
            </tr>
            <tr>
              <td>원자력책임법</td>
              <td>원자력시설을 운영하는 사업자의 의무 및 책임 이행에 관한 규정</td>
            </tr>
            <tr>
              <td class="text-center" rowspan="3" style={{ width: "10%" }}>규정</td>
              <td>원자력시설의 안전에 관한 규정</td>
              <td>처분시설을 포함한 모든 원자력시설에 적용되는 일반 안전 규제요건</td>
            </tr>
            <tr>
              <td>인간 및 환경 보호와 관련하여 사용후핵연료 및 원자력폐기물의 최종 관리에 관한 규정</td>
              <td>사용후핵연료 및 원자력폐기물 (Nuclear Waste) 처분에 적용되는 규제요건 </td>
            </tr>
            <tr>
              <td>핵물질 및 원자력폐기물의 처분에 관한 안전 규정</td>
              <td>처분시설 설계, 건설과 처분시설 폐쇄 후 기간까지 고려한 안전성평가 및 보고에 관한 규제요건</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-4 pt-3">
        <h5 class="sector-title">스웨덴 심층처분시스템 개발 주요 연혁</h5>
        <ul>
          <li>`92년, 부지확보 착수</li>
          <li>`02년~‘07년, Östhammar와 Oskarshamn에 부지조사 (Site Investigation) 착수</li>
          <li>`09년, Östhammar의 Forsmark 지역을 심층처분시설 부지로 최종 선정</li>
          <li>`11년, 건설 인·허가 진행</li>
          <li>`22년, 심층처분시설 건설 인·허가 승인</li>
          <li>`26년, 심층처분시설 착공 (예정)</li>
          <li>`33년, 심층처분시설 완공 (예정)</li>
        </ul>
        <div class="text-center">
          <img src="assets/images/brnc/swe_site.png" alt="Image" class="laws" />
        </div>
      </div>
    </div>
  )
}
