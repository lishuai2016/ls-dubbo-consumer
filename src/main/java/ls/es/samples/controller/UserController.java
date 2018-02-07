package ls.es.samples.controller;

import com.alibaba.dubbo.config.annotation.Reference;

import ls.es.samples.api.CommonService;
import ls.es.samples.entity.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
@RequestMapping(value="/user")
public class UserController {

	@SuppressWarnings("unused")
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);

	@Reference
	private CommonService commonService;

	@RequestMapping(value="/")
	public ModelAndView goIndex() {
		ModelAndView mv = new ModelAndView("index"); 
		mv.addObject("title", "Spring MVC And Freemarker"); 
		mv.addObject("content", " Hello world ， test my first spring mvc ! ");  
		return mv;
	}
	@RequestMapping(value="/initIndex")
	@ResponseBody
	public Integer initIndex() {
		commonService.initIndex();
		return -1;
	}
	
	@RequestMapping(value="/findOrg")
	@ResponseBody
	public CasOrgPub findOrg(Integer id) {
		CasOrgPub casOrgPub =commonService.findOrgById(id);
		return casOrgPub;
	}
	
	@RequestMapping(value="/findUser")
	@ResponseBody
	public CasUserPub findUser(Integer id) {
		CasUserPub casUserPub =commonService.findUserById(id);
		return casUserPub;
	}
	
	@RequestMapping(value="/findByParam")
	@ResponseBody
	public List<CasOrgPub> findByParam(String key) {
		SearchParam param = new SearchParam();
		param.setKey("");
		if("1".equals(key)){
			param.setProvince("江西省");
		}
		if("2".equals(key)){
			param.setRange("视觉功能鉴定");
		}
		if("3".equals(key)){
			param.setProvince("江西省");
			param.setRange("视觉功能鉴定");
		}
//		List<CasOrgPub> result = commonService.findOrg(param);
		return null;
	}
	
	@RequestMapping(value="/findUserByParam")
	@ResponseBody
	public List<CasUserPub> findUserByParam(String key) {
		SearchParam param = new SearchParam();
		param.setKey("");
		if("1".equals(key)){
			param.setProvince("江西省");
		}
		if("2".equals(key)){
			param.setRange("视觉功能鉴定");
		}
		if("3".equals(key)){
			param.setProvince("江西省");
			param.setRange("视觉功能鉴定");
		}
//		List<CasUserPub> result = commonService.findUser(param);
		return null;
	}
	
	@RequestMapping(value="/findUserByOrgId")
	@ResponseBody
	public List<CasUserPub> findUserByParam(Integer id) {
		List<CasUserPub> result = commonService.findUserByOrgPubId(id);
		return result;
	}
	@RequestMapping(value="/countOrg")
	@ResponseBody
	public Integer countOrg() {
		return commonService.countOrg();
	}
	@RequestMapping(value="/countUser")
	@ResponseBody
	public Integer countUser() {
		return commonService.countUser();
	}
	@RequestMapping(value="/countByProvince")
	@ResponseBody
	public List<CountByProvince> getUsers(String province) {
		return commonService.countByProvince(province);
	}

}
