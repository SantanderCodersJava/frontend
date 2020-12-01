
$(".gambar").attr("src", "https://img.icons8.com/pastel-glyph/2x/person-male.png");
						var $uploadCrop,
						tempFilename,
						rawImg,
						imageId;
						function readFile(input) {
				 			if (input.files && input.files[0]) {
				              var reader = new FileReader();
					            reader.onload = function (e) {
									$('.upload-demo').addClass('ready');
									$('#cropImagePop').modal('show');
						            rawImg = e.target.result;
					            }
					            reader.readAsDataURL(input.files[0]);
					        }
						}

						$uploadCrop = $('#upload-demo').croppie({
							viewport: {
								width: 150,
                                height: 150,
                                type: 'circle'
							},
							enforceBoundary: false,
							enableExif: true
						});

						$('#cropImagePop').on('shown.bs.modal', function(){
							$uploadCrop.croppie('bind', {
				        		url: rawImg
				        	}).then(function(){
				        		console.log('jQuery bind complete');
				        	});
						});

						$('.item-img').on('change', function () { 
							imageId = $(this).data('id'); 
							tempFilename = $(this).val();
							readFile(this); 
					});

						$('#cortarBtn').on('click', function (ev) {
							$uploadCrop.croppie('result', {
								type: 'base64',
								format: 'jpeg',
								size: {width: 150, height: 150}
							}).then(function (resp) {
								$('#imgCadastro').attr('src', resp);
								$('#cropImagePop').modal('hide');
							});
						});