import axios from "axios";

export const BrncUsa = () => {
  return (
    <div class="mt-4">
      <div>
        <h5 class="sector-title">미국의 원자력 관련 법령 체계도</h5>
        <div class="row">
          <div class="col-lg-6">
            <img src="assets/images/brnc/usa_laws.png" alt="Image" class="laws" />
          </div>
          <div class="col-lg-6">
            <ul class="summary">
              <li>미국의 원자력 관련 법령은 미국 의회가 제정한 법률 (ACT), 연방규정 (CFR)과 규제지침 (Guides), 민간 규격 (Standards)으로 구성되어 있다. 민간 규격의 경우, 해당 규격과 관련된 학회 및 협회에서 정한 것으로 법적 구속력은 없다.</li>
              <li>미국의 심지층처분에 관한 규제 근거는 원자력법 (Atomic Energy Act), 방폐물정책법 (Nuclear Waste Policy Act) 등에 제시되어 있다.</li>
              <li>연방규정(Federal Regulation) 중, 10CFR은 미국 원자력규제위원회 (NRC)에서 발행하고 있으며, 심층처분에 대한 규제요건을 제시하고 있는 주요 규정은 10CFR60, 10CFR63 등이 있다.</li>
              <li>또한, 40CFR은 미국 환경보호국 (EPA)에서 발행하고 있으며, 40CFR191, 40CFR19197 등을 통해 심층처분과 관련된 규제요건을 제시하고 있다.</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-4 pt-3">
        <h5 class="sector-title">미국의 심층처분 관련 주요 규제요건</h5>
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
              <td class="text-center" rowspan="2" style={{ width: "10%" }}>법률</td>
              <td>방사성폐기물정책법</td>
              <td>고준위 방폐물 및 사용후핵연료 처분에 대한 미 연방정부의 책임과 발생자 부담원칙, 처분사업의 계획수립 및 실시 주체 등에 대하여 포괄적으로 규정</td>
            </tr>
            <tr>
              <td>원자력 에너지 법</td>
              <td>방폐물의 처리 및 처분과 관련된 활동과 방폐물 처분시설 건설 및 운영 허가는 NRC의 승인을 받아야 함을 규정</td>
            </tr>
            <tr>
              <td class="text-center" rowspan="4" style={{ width: "10%" }}>연방규정</td>
              <td>지층처분시설의 고준위방폐물 처분</td>
              <td>미국 원자력규제위원회(NRC)가 승인한 지하 저장소에 저준위 방사성 폐기물을 안전하게 처리 및 처분할 수 있는 규정을 제시</td>
            </tr>
            <tr>
              <td>네바다주 유카마운틴 지층처분시설의 고준위방폐물 처분</td>
              <td>NRC가 승인한 지하 저장소에 고준위 방사성 폐기물을 안전하게 처리 및 처분할 수 있는 규정을 제시<br />
              10CFR63은 10CFR60을 보완하여 더욱 엄격한 기준을 제시
              </td>
            </tr>
            <tr>
              <td>사용후핵연료, 고준위 및 TRU 방폐물의 관리와 처분을 위한 환경 방사선방호 기준</td>
              <td>미국 환경보호국(EPA)이 고준위 방사성 폐기물의 지하처분시 발생하는 방사능 영향을 줄이기 위한 규정을 제시</td>
            </tr>
            <tr>
              <td>네바다주 유카마운틴을 위한 공중의 보건 및 환경방사선방호의 기준</td>
              <td>EPA가 저준위와 고준위 방사성 폐기물에 해당되지 않는 준고준위 폐기물을 안전하게 처리 및 처분할 수 있는 지하 저장소의 운영과 유지보수에 관한 규정을 제시</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-4 pt-3">
        <h5 class="sector-title">미국의 심층처분시스템 개발 주요 연혁</h5>
        <ul>
          <li>`83년, 처분시설 부지확보 착수</li>
          <li>`87년, 후보지 중 한 곳인 네바다주 Yucca Mountain에 대한 부지조사 착수 </li>
          <li>`02년, Yucca Mountain을 심층처분 부지로 선정 </li>
          <li>`08년, DOE에서 Yucca Mountain 부지의 심층처분 인·허가 신청서 제출</li>
          <li>`10년, Yucca Mountain 프로젝트 잠정 중단</li>
          <li>`12년, 합의에 근거한 새로운 부지선정 절차 마련, 전담기구 설치, 중간저장시설ㆍ처분시설 확보 등 권고</li>
          <li>`22년, 각 원전에서 한시적으로 원전 부지 내 사용후핵연료 임시저장시설 운영중, 중간저장시설은 민간 주도로 추진중 (텍사스ㆍ뉴멕시코)</li>
        </ul>
        <div class="text-center">
          <img src="assets/images/brnc/usa_site.png" alt="Image" class="laws" />
        </div>
      </div>
    </div>
  )
}