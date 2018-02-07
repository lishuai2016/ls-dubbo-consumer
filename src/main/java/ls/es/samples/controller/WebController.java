package ls.es.samples.controller;

import com.alibaba.dubbo.common.utils.StringUtils;

import ls.es.samples.api.CommonService;
import ls.es.samples.entity.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import java.util.List;

@Controller
public class WebController {
	private static String BASE_URL = "http://adm.sfjdml.com/";

	@Resource
	private CommonService commonService;

	@RequestMapping(value = "/initIndex")
	@ResponseBody
	public Integer initIndex() {
		commonService.initIndex();
		return -1;
	}

	@RequestMapping(value = "/toindex")
	public String souSuo() {
		return "index";
	}

	@RequestMapping(value = "/touser")
	public String toCasUser(SearchParam param, ModelMap modelMap) {
		if (StringUtils.isNotEmpty(param.getKey())) {
			modelMap.addAttribute("key", param.getKey());
		}
		if (StringUtils.isNotEmpty(param.getProvince())) {
			modelMap.addAttribute("province", param.getProvince());
		}
		if (StringUtils.isNotEmpty(param.getRange())) {
			modelMap.addAttribute("range", param.getRange());
		}
		Pagination page = commonService.findUser(param);
		for (int i = 0; i < page.getResult().size(); i++) {
			CasUserPub casUserPub = (CasUserPub) page.getResult().get(i);
			if (0 == casUserPub.getSex()) {
				modelMap.addAttribute("xb", "女");
			}
			if (1 == casUserPub.getSex() && casUserPub.getUserType() != null) {
				modelMap.addAttribute("xb", "男");
			}
			if (2 == casUserPub.getSex() && casUserPub.getUserType() != null) {
				modelMap.addAttribute("xb", "未填");
			}
			if (casUserPub.getUserType() != null
					&& 1 == casUserPub.getUserType()) {
				modelMap.addAttribute("yhlx", "鉴定人");
			}
			if (casUserPub.getUserType() != null && 2 == casUserPub.getSex()) {
				modelMap.addAttribute("yhlx", "鉴定助理");
			}
		}
		modelMap.addAttribute("page", page);
		modelMap.addAttribute("alluser", page.getResult());
		return "jiandingren";
	}

	@RequestMapping(value = "/touserxx/{userid}")
	public String toCasUserMinute(@PathVariable("userid") Integer userId,
			ModelMap modelMap) {
		CasUserPub findUserById = commonService.findUserById(userId);
		if (0 == findUserById.getSex()) {
			modelMap.addAttribute("xb", "女");
		}
		if (1 == findUserById.getSex()) {
			modelMap.addAttribute("xb", "男");
		}
		if (2 == findUserById.getSex()) {
			modelMap.addAttribute("xb", "未填");
		}
		if (findUserById.getUserType() != null
				&& 1 == findUserById.getUserType()) {
			modelMap.addAttribute("yhlx", "鉴定人");
		}
		if (findUserById.getUserType() != null && 2 == findUserById.getSex()) {
			modelMap.addAttribute("yhlx", "鉴定助理");
		}
		Integer orgId = findUserById.getOrgId();
		CasOrgPub userOrg = commonService.findOrgById(orgId);
		modelMap.addAttribute("userorg", userOrg);
		modelMap.addAttribute("user", findUserById);
		modelMap.addAttribute("baseurl", BASE_URL);
		return "jiandingren_xiangxiye";
	}

	@RequestMapping(value = "/toorg")
	public String toCasOrg(SearchParam param, ModelMap modelMap) {
		if (StringUtils.isNotEmpty(param.getKey())) {
			modelMap.addAttribute("key", param.getKey());
		}
		if (StringUtils.isNotEmpty(param.getProvince())) {
			modelMap.addAttribute("province", param.getProvince());
		}
		if (StringUtils.isNotEmpty(param.getRange())) {
			modelMap.addAttribute("range", param.getRange());
		}
		Pagination page = commonService.findOrg(param);
		modelMap.addAttribute("page", page);
		modelMap.addAttribute("allorg", page.getResult());

		return "jiandingjigou";
	}

	@RequestMapping(value = "/toorgxx/{id}")
	public String toCasOrgMinute(ModelMap modelMap,
			@PathVariable("id") Integer id) {

		CasOrgPub findOrgById = commonService.findOrgById(id);
		List<CasUserPub> findUser = commonService.findUserByOrgPubId(id);
		modelMap.addAttribute("orguser", findUser);
		modelMap.addAttribute("org", findOrgById);
		modelMap.addAttribute("baseurl", BASE_URL);
		return "jiandingjigou_xiangxiye";
	}

	// @RequestMapping(value = "/toorgxxFromUser/{orgId}")
	// public String toCasOrgMinute1(ModelMap modelMap,
	// @PathVariable("orgId") Integer orgId) {
	//
	// CasOrgPub findOrgById = commonService.findOrgByOrgId(orgId);
	// //List<CasUserPub> findUser = commonService.findUserByOrgId(orgId);
	// //modelMap.addAttribute("orguser", findUser);
	// modelMap.addAttribute("org", findOrgById);
	// modelMap.addAttribute("baseurl", BASE_URL);
	// return "jiandingjigou_xiangxiye";
	// }
	@RequestMapping(value = "/")
	public String goIndex() {
		ModelAndView mv = new ModelAndView();
		// mv.addObject(attributeName, attributeValue)
		return "index";
	}

	@RequestMapping(value = "/tosousuo")
	public String souSuo(SearchParam param, ModelMap modelMap) {

		if (StringUtils.isNotEmpty(param.getKey())) {
			modelMap.addAttribute("key", param.getKey());
		}
		if (StringUtils.isNotEmpty(param.getProvince())) {
			modelMap.addAttribute("province", param.getProvince());
		}
		if (StringUtils.isNotEmpty(param.getRange())) {
			modelMap.addAttribute("range", param.getRange());
		}
		Pagination page = commonService.findUserAndOrg(param);
		modelMap.addAttribute("page", page);
		modelMap.addAttribute("userandorg", page.getResult());

		return "quanbu";
	}

	@RequestMapping("/lianxi")
	public String toLianXi() {

		return "lianxiwomen";
	}

	@RequestMapping("/mianze")
	public String tomianze() {

		return "mianzeshengming";
	}

	@RequestMapping(value = "/countByProvince")
	@ResponseBody
	public List<CountByProvince> getUsers(String province) {
		return commonService.countByProvince(province);
	}

}