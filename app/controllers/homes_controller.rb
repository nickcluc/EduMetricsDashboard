class HomesController < ApplicationController
  # respond_to :html, :json
  def index
    gon.resilience = Response.includes(:category).where(category_id: 1, responder_type_id: 1).pluck(:value).unshift("data1")
    gon.timeManagement = Response.includes(:category).where(category_id: 2, responder_type_id: 1).pluck(:value).unshift("data2")
    gon.safety = Response.includes(:category).where(category_id: 3, responder_type_id: 1).pluck(:value).unshift("data3")
    gon.support = Response.includes(:category).where(category_id: 4, responder_type_id: 1).pluck(:value).unshift("data4")
    gon.relationships = Response.includes(:category).where(category_id: 5, responder_type_id: 1).pluck(:value).unshift("data5")
    gon.facilities = Response.includes(:category).where(category_id: 6, responder_type_id: 1).pluck(:value).unshift("data6")
    gon.dates = Response.includes(:category).where(category_id: 6, responder_type: 1).pluck(:created_at).unshift("x")
  end
end
