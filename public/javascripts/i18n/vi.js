I18n.translations || (I18n.translations = {});
I18n.translations["vi"] = I18n.extend((I18n.translations["vi"] || {}), {"activerecord":{"errors":{"messages":{"record_invalid":"Có các lỗi sau: %{errors}","restrict_dependent_destroy":{"has_many":"Không thể xóa do tồn tại một số đối tượng phụ thuộc %{record}","has_one":"Không thể xóa do tồn tại đối tượng phụ thuộc %{record}"}}}},"base":{"content_href":"Hướng dẫn Ruby on Rails","register":"Đăng ký ngay!","title":"| Ứng dụng mẫu hướng dẫn Ruby on Rails","welcome":"Chào mừng đến Sample App"},"config":{"activated":"Tài khoản đã được kích hoạt!","hi":"Xin chào","invalid_link":"Liên kết kích hoạt không hợp lệ","not_activated":"Tài khoản chưa được kích hoạt. Kiểm tra email của bạn để biết liên kết kích hoạt.","notification":"Chào mừng bạn đến với Ứng dụng mẫu! Nhấp vào liên kết bên dưới để kích hoạt tài khoản của bạn:"},"date":{"abbr_day_names":["CN","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"],"abbr_month_names":[null,"Thg 1","Thg 2","Thg 3","Thg 4","Thg 5","Thg 6","Thg 7","Thg 8","Thg 9","Thg 10","Thg 11","Thg 12"],"day_names":["Chủ nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy"],"formats":{"default":"%d-%m-%Y","long":"%d %B, %Y","short":"%d %b"},"month_names":[null,"Tháng một","Tháng hai","Tháng ba","Tháng tư","Tháng năm","Tháng sáu","Tháng bảy","Tháng tám","Tháng chín","Tháng mười","Tháng mười một","Tháng mười hai"],"order":["day","month","year"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"khoảng 1 giờ","other":"khoảng %{count} giờ"},"about_x_months":{"one":"khoảng 1 tháng","other":"khoảng %{count} tháng"},"about_x_years":{"one":"khoảng 1 năm","other":"khoảng %{count} năm"},"almost_x_years":{"one":"gần 1 năm","other":"gần %{count} năm"},"half_a_minute":"30 giây","less_than_x_minutes":{"one":"chưa tới 1 phút","other":"chưa tới %{count} phút"},"less_than_x_seconds":{"one":"chưa tới 1 giây","other":"chưa tới %{count} giây"},"over_x_years":{"one":"hơn 1 năm","other":"hơn %{count} năm"},"x_days":{"one":"1 ngày","other":"%{count} ngày"},"x_minutes":{"one":"1 phút","other":"%{count} phút"},"x_months":{"one":"1 tháng","other":"%{count} tháng"},"x_seconds":{"one":"1 giây","other":"%{count} giây"}},"prompts":{"day":"Ngày","hour":"Giờ","minute":"Phút","month":"Tháng","second":"Giây","year":"Năm"}},"errors":{"format":"%{attribute} %{message}","messages":{"accepted":"phải được đồng ý","blank":"không thể để trắng","confirmation":"không khớp với xác nhận","empty":"không thể rỗng","equal_to":"phải bằng %{count}","even":"phải là số chẵn","exclusion":"đã được giành trước","greater_than":"phải lớn hơn %{count}","greater_than_or_equal_to":"phải lớn hơn hoặc bằng %{count}","inclusion":"không có trong danh sách","invalid":"không hợp lệ","less_than":"phải nhỏ hơn %{count}","less_than_or_equal_to":"phải nhỏ hơn hoặc bằng %{count}","not_a_number":"không phải là số","not_an_integer":"phải là một số nguyên","odd":"phải là số lẻ","other_than":"cần phải khác %{count}","present":"cần phải để trắng","taken":"đã có","too_long":"quá dài (tối đa %{count} ký tự)","too_short":"quá ngắn (tối thiểu %{count} ký tự)","wrong_length":"độ dài không đúng (phải là %{count} ký tự)"},"template":{"body":"Có lỗi với các mục sau:","header":{"one":"1 lỗi ngăn không cho lưu %{model} này","other":"%{count} lỗi ngăn không cho lưu %{model} này"}}},"faker":{"address":{"city":["#{city_root}"],"city_root":["Bắc Giang","Bắc Kạn","Bắc Ninh","Cao Bằng","Điện Biên","Hà Giang","Hà Nam","Hà Tây","Hải Dương","TP Hải Phòng","Hòa Bình","Hưng Yên","Lai Châu","Lào Cai","Lạng Sơn","Nam Định","Ninh Bình","Phú Thọ","Quảng Ninh","Sơn La","Thái Bình","Thái Nguyên","Tuyên Quang","Vĩnh Phúc","Yên Bái","TP Đà Nẵng","Bình Định","Đắk Lắk","Đắk Nông","Gia Lai","Hà Tĩnh","Khánh Hòa","Kon Tum","Nghệ An","Phú Yên","Quảng Bình","Quảng Nam","Quảng Ngãi","Quảng Trị","Thanh Hóa","Thừa Thiên Huế","TP TP. Hồ Chí Minh","An Giang","Bà Rịa Vũng Tàu","Bạc Liêu","Bến Tre","Bình Dương","Bình Phước","Bình Thuận","Cà Mau","TP Cần Thơ","Đồng Nai","Đồng Tháp","Hậu Giang","Kiên Giang","Lâm Đồng","Long An","Ninh Thuận","Sóc Trăng","Tây Ninh","Tiền Giang","Trà Vinh","Vĩnh Long"],"county":["Avon","Bedfordshire","Berkshire","Borders","Buckinghamshire","Cambridgeshire","Central","Cheshire","Cleveland","Clwyd","Cornwall","County Antrim","County Armagh","County Down","County Fermanagh","County Londonderry","County Tyrone","Cumbria","Derbyshire","Devon","Dorset","Dumfries and Galloway","Durham","Dyfed","East Sussex","Essex","Fife","Gloucestershire","Grampian","Greater Manchester","Gwent","Gwynedd County","Hampshire","Herefordshire","Hertfordshire","Highlands and Islands","Humberside","Isle of Wight","Kent","Lancashire","Leicestershire","Lincolnshire","Lothian","Merseyside","Mid Glamorgan","Norfolk","North Yorkshire","Northamptonshire","Northumberland","Nottinghamshire","Oxfordshire","Powys","Rutland","Shropshire","Somerset","South Glamorgan","South Yorkshire","Staffordshire","Strathclyde","Suffolk","Surrey","Tayside","Tyne and Wear","Việt Nam","Warwickshire","West Glamorgan","West Midlands","West Sussex","West Yorkshire","Wiltshire","Worcestershire"],"default_country":["Việt Nam"],"postcode":"/[A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {1,2}[0-9][ABD-HJLN-UW-Z]{2}/"},"cell_phone":{"formats":["012# ### ####","0162 ### ####","0163 ### ####","0164 ### ####","0165 ### ####","0166 ### ####","0167 ### ####","0168 ### ####","0169 ### ####","0186 ### ####","0188 ### ####","0199 ### ####","0866 ### ###","0868 ### ###","0869 ### ###","088# ### ###","09## ### ###"]},"company":{"name":["#{prefix} #{Name.last_name}"],"prefix":["Công ty","Cty TNHH","Cty","Cửa hàng","Trung tâm","Chi nhánh"]},"internet":{"domain_suffix":["com","net","info","vn","com.vn"]},"lorem":{"words":["đã","đang","ừ","ờ","á","không","biết","gì","hết","đâu","nha","thế","thì","là","đánh","đá","đập","phá","viết","vẽ","tô","thuê","mướn","mượn","mua","một","hai","ba","bốn","năm","sáu","bảy","tám","chín","mười","thôi","việc","nghỉ","làm","nhà","cửa","xe","đạp","ác","độc","khoảng","khoan","thuyền","tàu","bè","lầu","xanh","đỏ","tím","vàng","kim","chỉ","khâu","may","vá","em","anh","yêu","thương","thích","con","cái","bàn","ghế","tủ","quần","áo","nón","dép","giày","lỗi","được","ghét","giết","chết","hết","tôi","bạn","tui","trời","trăng","mây","gió","máy","hàng","hóa","leo","núi","bơi","biển","chìm","xuồng","nước","ngọt","ruộng","đồng","quê","hương"]},"name":{"first_name":["Phạm","Nguyễn","Trần","Lê","Lý","Hoàng","Phan","Vũ","Tăng","Đặng","Bùi","Đỗ","Hồ","Ngô","Dương","Đào","Đoàn","Vương","Trịnh","Đinh","Lâm","Phùng","Mai","Tô","Trương","Hà"],"last_name":["Nam","Trung","Thanh","Thị","Văn","Dương","Tăng","Quốc","Như","Phạm","Nguyễn","Trần","Lê","Lý","Hoàng","Phan","Vũ","Tăng","Đặng","Bùi","Đỗ","Hồ","Ngô","Dương","Đào","Đoàn","Vương","Trịnh","Đinh","Lâm","Phùng","Mai","Tô","Trương","Hà","Vinh","Nhung","Hòa","Tiến","Tâm","Bửu","Loan","Hiền","Hải","Vân","Kha","Minh","Nhân","Triệu","Tuân","Hữu","Đức","Phú","Khoa","Thắng","Sơn","Dung","Tú","Trinh","Thảo","Sa","Kim","Long","Thi","Cường","Ngọc","Sinh","Khang","Phong","Thắm","Thu","Thủy","Nhàn"],"name":["#{first_name} #{last_name}","#{first_name} #{last_name} #{last_name}","#{first_name} #{last_name} #{last_name} #{last_name}"],"name_with_middle":["#{first_name} #{last_name} #{last_name}"]},"phone_number":{"formats":["01#### #####","01### ######","01#1 ### ####","011# ### ####","02# #### ####","03## ### ####","055 #### ####","056 #### ####","0800 ### ####","08## ### ####","09## ### ####","016977 ####","01### #####","0500 ######","0800 ######"]}},"help":{"content_help":"Nhận trợ giúp về Hướng dẫn Ruby on Rails tại %{href_sp}. Để nhận trợ giúp về ứng dụng mẫu này, hãy xem %{href_base}.","name":"Hỗ trợ","support_rails":"trang hỗ trợ hướng dẫn Rails"},"helpers":{"select":{"prompt":"Vui lòng chọn"},"submit":{"create":"Tạo %{model}","submit":"Lưu %{model}","update":"Cập nhật %{model}"}},"home":{"content_home":"Đây là trang chủ cho %{href_base} ứng dụng mẫu.","name":"Trang chủ","sample_rails":"Ứng dụng mẫu"},"i18n":{"plural":{"keys":["other"],"rule":{}},"transliterate":{"rule":{"À":"A","Á":"A","Â":"A","Ã":"A","È":"E","É":"E","Ê":"E","Ì":"I","Í":"I","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ù":"U","Ú":"U","Ý":"Y","à":"a","á":"a","â":"a","ã":"a","è":"e","é":"e","ê":"e","ì":"i","í":"i","ò":"o","ó":"o","ô":"o","õ":"o","ù":"u","ú":"u","ý":"y","Ă":"A","ă":"a","Đ":"D","đ":"d","Ĩ":"I","ĩ":"i","Ũ":"U","ũ":"u","Ơ":"O","ơ":"o","Ư":"U","ư":"u","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y"}}},"login":{"invalid":"Email hoặc mật khẩu không hợp lệ","new":"Đăng ký ngay","please":"Vui lòng hãy đăng nhập.","remember":"Ghi nhớ tài khoản"},"micropost":{"alert":"Kích thước tệp tối đa là 5MB. Vui lòng chọn một tệp nhỏ hơn.","create":"Đã tạo bài viết","delete_fail":"Xóa không thành công","deleted":"bài đăng đã bị xóa","error":"Lỗi truy cập","input_content":"Soạn bài mới ...","less_than_5":"phải nhỏ hơn 5MB","name":"Bài đăng","post":"Đăng bài","posted":"đã đăng %{value} trước đây","sure":"Bạn chắc chắn?","view":"xem hồ sơ của tôi"},"number":{"currency":{"format":{"delimiter":".","format":"%n %u","precision":0,"separator":",","significant":false,"strip_insignificant_zeros":false,"unit":"VNĐ"}},"format":{"delimiter":".","precision":3,"separator":",","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"Tỷ","million":"Triệu","quadrillion":"Triệu tỷ","thousand":"Nghìn","trillion":"Nghìn tỷ","unit":""}},"format":{"delimiter":"","precision":1,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Byte"},"gb":"GB","kb":"KB","mb":"MB","tb":"TB"}}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"reset_pass":{"content1":"Để đặt lại mật khẩu của bạn, hãy nhấp vào liên kết bên dưới:","content2":"Liên kết này sẽ hết hạn sau hai giờ.","content3":"Nếu bạn không yêu cầu đặt lại mật khẩu của mình, vui lòng bỏ qua email này và mật khẩu của bạn sẽ vẫn như cũ.","expired":"Đặt lại mật khẩu đã hết hạn.","forget":"Quên mật khẩu","has_reset":"Mật khẩu đã được đặt lại.","mail_to":"Email được gửi kèm theo hướng dẫn đặt lại mật khẩu","name":"Đặt lại mật khẩu","not_empty":"không thể để trống","not_found":"Không tìm thấy địa chỉ email","sent":"Gửi","update_pass":"Cập nhật mật khẩu"},"sign_up":{"confirmation":"Nhập lại mật khẩu","create_account":"Tạo mới tài khoản","email":"Email","error":" lỗi","had":"Đã có","name":"Họ tên","password":"Mật khẩu","title":"Đăng ký","warning":"Không tìm thấy tài khoản"},"support":{"array":{"last_word_connector":", và ","two_words_connector":" và ","words_connector":", "}},"time":{"am":"sáng","formats":{"default":"%a, %d %b %Y %H:%M:%S %z","long":"%d %B, %Y %H:%M","short":"%d %b %H:%M"},"pm":"chiều"},"user":{"account":"Tài khoản","account_activation":"Kích hoạt tài khoản","alert":"Bạn có muốn xóa tài khoản này ?","all":"Tất cả tài khoản","change":"thay đổi","check":"Hãy kiểm tra email của bạn để kích hoạt tài khoản của bạn.","delete":"xóa bỏ","deleted":"Người dùng đã bị xóa","logout":"Đăng xuất","name":"Đăng nhập","not_loged_in":"Vui lòng đăng nhập","profile":"Hồ sơ","save":"Lưu","settings":"Cài đặt","update":"Cập nhật hồ sơ của bạn","updated":"Hồ sơ cá nhân đã cập nhật","user":"Người dùng"}});
